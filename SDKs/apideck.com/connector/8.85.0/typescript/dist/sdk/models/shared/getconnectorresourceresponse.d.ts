import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorResource } from "./connectorresource";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetConnectorResourceResponse extends SpeakeasyBase {
    data: ConnectorResource;
    links?: Links;
    meta?: Meta;
    status: string;
    statusCode: number;
}
