import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdentityTypeEnum } from "./identitytypeenum";



// IdentityInfo
/** 
 * Information about an email identity.
**/
export class IdentityInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityName" })
  identityName?: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityType" })
  identityType?: IdentityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=SendingEnabled" })
  sendingEnabled?: boolean;
}
