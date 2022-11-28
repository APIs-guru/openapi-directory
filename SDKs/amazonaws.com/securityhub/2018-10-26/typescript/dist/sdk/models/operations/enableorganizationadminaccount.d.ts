import { SpeakeasyBase } from "../../../internal/utils";
export declare class EnableOrganizationAdminAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class EnableOrganizationAdminAccountRequestBody extends SpeakeasyBase {
    adminAccountId: string;
}
export declare class EnableOrganizationAdminAccountRequest extends SpeakeasyBase {
    headers: EnableOrganizationAdminAccountHeaders;
    request: EnableOrganizationAdminAccountRequestBody;
}
export declare class EnableOrganizationAdminAccountResponse extends SpeakeasyBase {
    contentType: string;
    enableOrganizationAdminAccountResponse?: Map<string, any>;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    statusCode: number;
}
