import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Identifies a Amazon Cognito user group. A user group can be used in on or more work teams.
**/
export declare class CognitoMemberDefinition extends SpeakeasyBase {
    clientId: string;
    userGroup: string;
    userPool: string;
}
