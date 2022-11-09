import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DkimAttributes } from "./dkimattributes";
import { IdentityTypeEnum } from "./identitytypeenum";


// CreateEmailIdentityResponse
/** 
 * <p>If the email identity is a domain, this object contains information about the DKIM verification status for the domain.</p> <p>If the email identity is an email address, this object is empty. </p>
**/
export class CreateEmailIdentityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DkimAttributes" })
  dkimAttributes?: DkimAttributes;

  @Metadata({ data: "json, name=IdentityType" })
  identityType?: IdentityTypeEnum;

  @Metadata({ data: "json, name=VerifiedForSendingStatus" })
  verifiedForSendingStatus?: boolean;
}
