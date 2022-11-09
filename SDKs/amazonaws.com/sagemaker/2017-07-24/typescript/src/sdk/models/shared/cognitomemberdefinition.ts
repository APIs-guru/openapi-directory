import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CognitoMemberDefinition
/** 
 * Identifies a Amazon Cognito user group. A user group can be used in on or more work teams.
**/
export class CognitoMemberDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientId" })
  clientId: string;

  @Metadata({ data: "json, name=UserGroup" })
  userGroup: string;

  @Metadata({ data: "json, name=UserPool" })
  userPool: string;
}
