import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsIamAccessKeySessionContextSessionIssuer
/** 
 * Information about the entity that created the session.
**/
export class AwsIamAccessKeySessionContextSessionIssuer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=PrincipalId" })
  principalId?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName?: string;
}
