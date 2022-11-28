import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VerificationCode
/** 
 * The Directory API allows you to view, generate, and invalidate backup verification codes for a user.
**/
export class VerificationCode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=verificationCode" })
  verificationCode?: string;
}
