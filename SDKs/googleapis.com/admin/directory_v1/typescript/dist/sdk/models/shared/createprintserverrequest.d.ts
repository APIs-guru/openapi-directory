import { SpeakeasyBase } from "../../../internal/utils";
import { PrintServerInput } from "./printserver";
/**
 * Request for adding a new print server.
**/
export declare class CreatePrintServerRequestInput extends SpeakeasyBase {
    parent?: string;
    printServer?: PrintServerInput;
}
