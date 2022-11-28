import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DkimAttributes } from "./dkimattributes";
import { IdentityTypeEnum } from "./identitytypeenum";



// CreateEmailIdentityResponse
/** 
 * <p>If the email identity is a domain, this object contains information about the DKIM verification status for the domain.</p> <p>If the email identity is an email address, this object is empty. </p>
**/
export class CreateEmailIdentityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DkimAttributes" })
  dkimAttributes?: DkimAttributes;

  @SpeakeasyMetadata({ data: "json, name=IdentityType" })
  identityType?: IdentityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=VerifiedForSendingStatus" })
  verifiedForSendingStatus?: boolean;
}
