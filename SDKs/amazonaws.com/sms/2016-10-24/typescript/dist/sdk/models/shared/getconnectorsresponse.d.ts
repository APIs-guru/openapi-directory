import { SpeakeasyBase } from "../../../internal/utils";
import { Connector } from "./connector";
export declare class GetConnectorsResponse extends SpeakeasyBase {
    connectorList?: Connector[];
    nextToken?: string;
}
