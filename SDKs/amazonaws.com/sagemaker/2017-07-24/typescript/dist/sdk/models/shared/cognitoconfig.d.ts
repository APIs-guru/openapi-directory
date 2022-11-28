import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Use this parameter to configure your Amazon Cognito workforce. A single Cognito workforce is created using and corresponds to a single <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html"> Amazon Cognito user pool</a>.
**/
export declare class CognitoConfig extends SpeakeasyBase {
    clientId: string;
    userPool: string;
}
