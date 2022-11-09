import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum WebsiteTypeEnum {
    Primary = "primary",
    Secondary = "secondary",
    Work = "work",
    Personal = "personal",
    Other = "other"
}
export declare class Website extends SpeakeasyBase {
    id?: string;
    type?: WebsiteTypeEnum;
    url: string;
}
