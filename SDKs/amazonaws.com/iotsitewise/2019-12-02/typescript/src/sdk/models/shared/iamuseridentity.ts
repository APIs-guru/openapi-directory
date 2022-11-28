import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IamUserIdentity
/** 
 * Contains information about an Identity and Access Management user.
**/
export class IamUserIdentity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;
}
