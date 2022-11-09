import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VerificationCode
/** 
 * The Directory API allows you to view, generate, and invalidate backup verification codes for a user.
**/
export class VerificationCode extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;

  @Metadata({ data: "json, name=verificationCode" })
  verificationCode?: string;
}
