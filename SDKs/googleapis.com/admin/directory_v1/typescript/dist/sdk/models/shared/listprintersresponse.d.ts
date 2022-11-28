import { SpeakeasyBase } from "../../../internal/utils";
import { Printer } from "./printer";
/**
 * Response for listing printers.
**/
export declare class ListPrintersResponse extends SpeakeasyBase {
    nextPageToken?: string;
    printers?: Printer[];
}
