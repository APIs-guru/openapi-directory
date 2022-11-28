import { SpeakeasyBase } from "../../../internal/utils";
import { PrintServer } from "./printserver";
export declare class ListPrintServersResponse extends SpeakeasyBase {
    nextPageToken?: string;
    printServers?: PrintServer[];
}
