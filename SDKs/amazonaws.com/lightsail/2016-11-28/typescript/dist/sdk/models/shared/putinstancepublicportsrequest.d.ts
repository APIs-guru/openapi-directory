import { SpeakeasyBase } from "../../../internal/utils";
import { PortInfo } from "./portinfo";
export declare class PutInstancePublicPortsRequest extends SpeakeasyBase {
    instanceName: string;
    portInfos: PortInfo[];
}
