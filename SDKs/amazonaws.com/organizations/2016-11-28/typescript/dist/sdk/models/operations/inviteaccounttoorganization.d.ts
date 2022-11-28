import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum InviteAccountToOrganizationXAmzTargetEnum {
    AwsOrganizationsV20161128InviteAccountToOrganization = "AWSOrganizationsV20161128.InviteAccountToOrganization"
}
export declare class InviteAccountToOrganizationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: InviteAccountToOrganizationXAmzTargetEnum;
}
export declare class InviteAccountToOrganizationRequest extends SpeakeasyBase {
    headers: InviteAccountToOrganizationHeaders;
    request: shared.InviteAccountToOrganizationRequest;
}
export declare class InviteAccountToOrganizationResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    accountOwnerNotVerifiedException?: any;
    concurrentModificationException?: any;
    constraintViolationException?: any;
    contentType: string;
    duplicateHandshakeException?: any;
    finalizingOrganizationException?: any;
    handshakeConstraintViolationException?: any;
    invalidInputException?: any;
    inviteAccountToOrganizationResponse?: shared.InviteAccountToOrganizationResponse;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
