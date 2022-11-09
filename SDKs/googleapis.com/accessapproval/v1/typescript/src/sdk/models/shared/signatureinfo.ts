import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SignatureInfo
/** 
 * Information about the digital signature of the resource.
**/
export class SignatureInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerKmsKeyVersion" })
  customerKmsKeyVersion?: string;

  @Metadata({ data: "json, name=googlePublicKeyPem" })
  googlePublicKeyPem?: string;

  @Metadata({ data: "json, name=signature" })
  signature?: string;
}
