import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAwsOrganizationsAccessStatusXAmzTargetEnum {
    Aws242ServiceCatalogServiceGetAwsOrganizationsAccessStatus = "AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus"
}
export declare class GetAwsOrganizationsAccessStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAwsOrganizationsAccessStatusXAmzTargetEnum;
}
export declare class GetAwsOrganizationsAccessStatusRequest extends SpeakeasyBase {
    headers: GetAwsOrganizationsAccessStatusHeaders;
    request: Map<string, any>;
}
export declare class GetAwsOrganizationsAccessStatusResponse extends SpeakeasyBase {
    contentType: string;
    getAwsOrganizationsAccessStatusOutput?: shared.GetAwsOrganizationsAccessStatusOutput;
    operationNotSupportedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
