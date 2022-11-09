import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IdentityTypeEnum } from "./identitytypeenum";


// IdentityInfo
/** 
 * Information about an email identity.
**/
export class IdentityInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdentityName" })
  identityName?: string;

  @Metadata({ data: "json, name=IdentityType" })
  identityType?: IdentityTypeEnum;

  @Metadata({ data: "json, name=SendingEnabled" })
  sendingEnabled?: boolean;
}
