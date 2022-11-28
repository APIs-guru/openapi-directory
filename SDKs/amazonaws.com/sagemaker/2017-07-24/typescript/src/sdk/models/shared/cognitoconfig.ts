import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CognitoConfig
/** 
 * Use this parameter to configure your Amazon Cognito workforce. A single Cognito workforce is created using and corresponds to a single <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html"> Amazon Cognito user pool</a>.
**/
export class CognitoConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=UserPool" })
  userPool: string;
}
