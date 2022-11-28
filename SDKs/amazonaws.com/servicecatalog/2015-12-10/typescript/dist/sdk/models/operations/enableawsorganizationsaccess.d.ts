import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EnableAwsOrganizationsAccessXAmzTargetEnum {
    Aws242ServiceCatalogServiceEnableAwsOrganizationsAccess = "AWS242ServiceCatalogService.EnableAWSOrganizationsAccess"
}
export declare class EnableAwsOrganizationsAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableAwsOrganizationsAccessXAmzTargetEnum;
}
export declare class EnableAwsOrganizationsAccessRequest extends SpeakeasyBase {
    headers: EnableAwsOrganizationsAccessHeaders;
    request: Map<string, any>;
}
export declare class EnableAwsOrganizationsAccessResponse extends SpeakeasyBase {
    contentType: string;
    enableAwsOrganizationsAccessOutput?: Map<string, any>;
    invalidStateException?: any;
    operationNotSupportedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
