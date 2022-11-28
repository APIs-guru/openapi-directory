import { SpeakeasyBase } from "../../../internal/utils";
import { PrintServerFailureInfo } from "./printserverfailureinfo";
import { PrintServer } from "./printserver";
export declare class BatchCreatePrintServersResponse extends SpeakeasyBase {
    failures?: PrintServerFailureInfo[];
    printServers?: PrintServer[];
}
