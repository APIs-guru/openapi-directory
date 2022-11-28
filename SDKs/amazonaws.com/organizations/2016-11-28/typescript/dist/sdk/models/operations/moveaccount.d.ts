import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum MoveAccountXAmzTargetEnum {
    AwsOrganizationsV20161128MoveAccount = "AWSOrganizationsV20161128.MoveAccount"
}
export declare class MoveAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: MoveAccountXAmzTargetEnum;
}
export declare class MoveAccountRequest extends SpeakeasyBase {
    headers: MoveAccountHeaders;
    request: shared.MoveAccountRequest;
}
export declare class MoveAccountResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    accountNotFoundException?: any;
    concurrentModificationException?: any;
    contentType: string;
    destinationParentNotFoundException?: any;
    duplicateAccountException?: any;
    invalidInputException?: any;
    serviceException?: any;
    sourceParentNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
