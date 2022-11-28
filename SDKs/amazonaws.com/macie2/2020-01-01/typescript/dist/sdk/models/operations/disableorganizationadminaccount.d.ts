import { SpeakeasyBase } from "../../../internal/utils";
export declare class DisableOrganizationAdminAccountQueryParams extends SpeakeasyBase {
    adminAccountId: string;
}
export declare class DisableOrganizationAdminAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisableOrganizationAdminAccountRequest extends SpeakeasyBase {
    queryParams: DisableOrganizationAdminAccountQueryParams;
    headers: DisableOrganizationAdminAccountHeaders;
}
export declare class DisableOrganizationAdminAccountResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    disableOrganizationAdminAccountResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
