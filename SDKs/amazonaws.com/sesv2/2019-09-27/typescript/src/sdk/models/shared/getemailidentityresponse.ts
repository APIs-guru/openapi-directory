import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DkimAttributes } from "./dkimattributes";
import { IdentityTypeEnum } from "./identitytypeenum";
import { MailFromAttributes } from "./mailfromattributes";
import { Tag } from "./tag";



// GetEmailIdentityResponse
/** 
 * Details about an email identity.
**/
export class GetEmailIdentityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationSetName" })
  configurationSetName?: string;

  @SpeakeasyMetadata({ data: "json, name=DkimAttributes" })
  dkimAttributes?: DkimAttributes;

  @SpeakeasyMetadata({ data: "json, name=FeedbackForwardingStatus" })
  feedbackForwardingStatus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IdentityType" })
  identityType?: IdentityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=MailFromAttributes" })
  mailFromAttributes?: MailFromAttributes;

  @SpeakeasyMetadata({ data: "json, name=Policies" })
  policies?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=VerifiedForSendingStatus" })
  verifiedForSendingStatus?: boolean;
}
