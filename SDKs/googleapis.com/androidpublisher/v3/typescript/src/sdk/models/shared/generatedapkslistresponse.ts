import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GeneratedApksPerSigningKey } from "./generatedapkspersigningkey";



// GeneratedApksListResponse
/** 
 * Response to list generated APKs.
**/
export class GeneratedApksListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=generatedApks", elemType: GeneratedApksPerSigningKey })
  generatedApks?: GeneratedApksPerSigningKey[];
}
