import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DkimAttributes } from "./dkimattributes";
import { IdentityTypeEnum } from "./identitytypeenum";



// CreateEmailIdentityResponse
/** 
 * <p>If the email identity is a domain, this object contains tokens that you can use to create a set of CNAME records. To sucessfully verify your domain, you have to add these records to the DNS configuration for your domain.</p> <p>If the email identity is an email address, this object is empty. </p>
**/
export class CreateEmailIdentityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DkimAttributes" })
  dkimAttributes?: DkimAttributes;

  @SpeakeasyMetadata({ data: "json, name=IdentityType" })
  identityType?: IdentityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=VerifiedForSendingStatus" })
  verifiedForSendingStatus?: boolean;
}
