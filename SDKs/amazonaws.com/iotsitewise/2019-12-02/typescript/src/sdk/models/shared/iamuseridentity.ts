import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IamUserIdentity
/** 
 * Contains information about an Identity and Access Management user.
**/
export class IamUserIdentity extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;
}
