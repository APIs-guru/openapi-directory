import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum DisableAwsOrganizationsAccessXAmzTargetEnum {
    Aws242ServiceCatalogServiceDisableAwsOrganizationsAccess = "AWS242ServiceCatalogService.DisableAWSOrganizationsAccess"
}
export declare class DisableAwsOrganizationsAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableAwsOrganizationsAccessXAmzTargetEnum;
}
export declare class DisableAwsOrganizationsAccessRequest extends SpeakeasyBase {
    headers: DisableAwsOrganizationsAccessHeaders;
    request: Map<string, any>;
}
export declare class DisableAwsOrganizationsAccessResponse extends SpeakeasyBase {
    contentType: string;
    disableAwsOrganizationsAccessOutput?: Map<string, any>;
    invalidStateException?: any;
    operationNotSupportedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
