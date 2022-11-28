import { SpeakeasyBase } from "../../../internal/utils";
import { PrintServerFailureInfo } from "./printserverfailureinfo";
export declare class BatchDeletePrintServersResponse extends SpeakeasyBase {
    failedPrintServers?: PrintServerFailureInfo[];
    printServerIds?: string[];
}
