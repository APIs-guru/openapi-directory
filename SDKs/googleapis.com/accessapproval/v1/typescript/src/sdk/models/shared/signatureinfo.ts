import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SignatureInfo
/** 
 * Information about the digital signature of the resource.
**/
export class SignatureInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerKmsKeyVersion" })
  customerKmsKeyVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=googlePublicKeyPem" })
  googlePublicKeyPem?: string;

  @SpeakeasyMetadata({ data: "json, name=signature" })
  signature?: string;
}
