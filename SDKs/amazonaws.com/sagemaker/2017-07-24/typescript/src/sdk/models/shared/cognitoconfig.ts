import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CognitoConfig
/** 
 * Use this parameter to configure your Amazon Cognito workforce. A single Cognito workforce is created using and corresponds to a single <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html"> Amazon Cognito user pool</a>.
**/
export class CognitoConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientId" })
  clientId: string;

  @Metadata({ data: "json, name=UserPool" })
  userPool: string;
}
