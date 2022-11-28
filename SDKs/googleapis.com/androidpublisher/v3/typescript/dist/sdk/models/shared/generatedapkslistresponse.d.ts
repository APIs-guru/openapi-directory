import { SpeakeasyBase } from "../../../internal/utils";
import { GeneratedApksPerSigningKey } from "./generatedapkspersigningkey";
/**
 * Response to list generated APKs.
**/
export declare class GeneratedApksListResponse extends SpeakeasyBase {
    generatedApks?: GeneratedApksPerSigningKey[];
}
