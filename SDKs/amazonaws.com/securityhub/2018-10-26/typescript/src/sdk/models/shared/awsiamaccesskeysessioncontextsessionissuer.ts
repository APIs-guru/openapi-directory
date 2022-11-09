import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsIamAccessKeySessionContextSessionIssuer
/** 
 * Information about the entity that created the session.
**/
export class AwsIamAccessKeySessionContextSessionIssuer extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId?: string;

  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=PrincipalId" })
  principalId?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;

  @Metadata({ data: "json, name=UserName" })
  userName?: string;
}
