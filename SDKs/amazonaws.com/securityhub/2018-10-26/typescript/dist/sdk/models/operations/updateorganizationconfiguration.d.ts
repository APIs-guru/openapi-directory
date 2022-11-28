import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateOrganizationConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateOrganizationConfigurationRequestBody extends SpeakeasyBase {
    autoEnable: boolean;
}
export declare class UpdateOrganizationConfigurationRequest extends SpeakeasyBase {
    headers: UpdateOrganizationConfigurationHeaders;
    request: UpdateOrganizationConfigurationRequestBody;
}
export declare class UpdateOrganizationConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    statusCode: number;
    updateOrganizationConfigurationResponse?: Map<string, any>;
}
