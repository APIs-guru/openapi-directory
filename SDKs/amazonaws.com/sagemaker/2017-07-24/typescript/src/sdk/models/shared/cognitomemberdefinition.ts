import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CognitoMemberDefinition
/** 
 * Identifies a Amazon Cognito user group. A user group can be used in on or more work teams.
**/
export class CognitoMemberDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=UserGroup" })
  userGroup: string;

  @SpeakeasyMetadata({ data: "json, name=UserPool" })
  userPool: string;
}
