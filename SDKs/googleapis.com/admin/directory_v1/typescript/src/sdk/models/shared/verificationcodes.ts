import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VerificationCode } from "./verificationcode";



// VerificationCodes
/** 
 * JSON response template for list verification codes operation in Directory API.
**/
export class VerificationCodes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: VerificationCode })
  items?: VerificationCode[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
