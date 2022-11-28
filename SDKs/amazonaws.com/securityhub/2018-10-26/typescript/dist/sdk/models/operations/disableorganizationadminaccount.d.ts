import { SpeakeasyBase } from "../../../internal/utils";
export declare class DisableOrganizationAdminAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisableOrganizationAdminAccountRequestBody extends SpeakeasyBase {
    adminAccountId: string;
}
export declare class DisableOrganizationAdminAccountRequest extends SpeakeasyBase {
    headers: DisableOrganizationAdminAccountHeaders;
    request: DisableOrganizationAdminAccountRequestBody;
}
export declare class DisableOrganizationAdminAccountResponse extends SpeakeasyBase {
    contentType: string;
    disableOrganizationAdminAccountResponse?: Map<string, any>;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    statusCode: number;
}
