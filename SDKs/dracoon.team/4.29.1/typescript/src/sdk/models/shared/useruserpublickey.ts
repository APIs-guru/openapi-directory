import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublicKeyContainerOutput } from "./publickeycontainer";



// UserUserPublicKeyOutput
/** 
 * Public key information
**/
export class UserUserPublicKeyOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=publicKeyContainer" })
  publicKeyContainer?: PublicKeyContainerOutput;
}
