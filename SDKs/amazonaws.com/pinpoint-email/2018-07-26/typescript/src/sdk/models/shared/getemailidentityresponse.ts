import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DkimAttributes } from "./dkimattributes";
import { IdentityTypeEnum } from "./identitytypeenum";
import { MailFromAttributes } from "./mailfromattributes";
import { Tag } from "./tag";


// GetEmailIdentityResponse
/** 
 * Details about an email identity.
**/
export class GetEmailIdentityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DkimAttributes" })
  dkimAttributes?: DkimAttributes;

  @Metadata({ data: "json, name=FeedbackForwardingStatus" })
  feedbackForwardingStatus?: boolean;

  @Metadata({ data: "json, name=IdentityType" })
  identityType?: IdentityTypeEnum;

  @Metadata({ data: "json, name=MailFromAttributes" })
  mailFromAttributes?: MailFromAttributes;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=VerifiedForSendingStatus" })
  verifiedForSendingStatus?: boolean;
}
