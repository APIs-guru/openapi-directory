import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ConnectorDocAudienceEnum {
    ApplicationOwner = "application_owner",
    Consumer = "consumer"
}
export declare enum ConnectorDocFormatEnum {
    Markdown = "markdown"
}
export declare class ConnectorDoc extends SpeakeasyBase {
    audience?: ConnectorDocAudienceEnum;
    format?: ConnectorDocFormatEnum;
    id?: string;
    name?: string;
    url?: string;
}
