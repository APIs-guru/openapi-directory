import { SpeakeasyBase } from "../../../internal/utils";
import { Connector } from "./connector";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetConnectorResponse extends SpeakeasyBase {
    data: Connector;
    links?: Links;
    meta?: Meta;
    status: string;
    statusCode: number;
}
