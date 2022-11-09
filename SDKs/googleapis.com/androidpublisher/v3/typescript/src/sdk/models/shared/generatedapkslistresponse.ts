import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GeneratedApksPerSigningKey } from "./generatedapkspersigningkey";


// GeneratedApksListResponse
/** 
 * Response to list generated APKs.
**/
export class GeneratedApksListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=generatedApks", elemType: shared.GeneratedApksPerSigningKey })
  generatedApks?: GeneratedApksPerSigningKey[];
}
