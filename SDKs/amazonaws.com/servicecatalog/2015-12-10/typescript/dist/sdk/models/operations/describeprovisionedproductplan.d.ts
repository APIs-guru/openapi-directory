import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeProvisionedProductPlanXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeProvisionedProductPlan = "AWS242ServiceCatalogService.DescribeProvisionedProductPlan"
}
export declare class DescribeProvisionedProductPlanHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeProvisionedProductPlanXAmzTargetEnum;
}
export declare class DescribeProvisionedProductPlanRequest extends SpeakeasyBase {
    headers: DescribeProvisionedProductPlanHeaders;
    request: shared.DescribeProvisionedProductPlanInput;
}
export declare class DescribeProvisionedProductPlanResponse extends SpeakeasyBase {
    contentType: string;
    describeProvisionedProductPlanOutput?: shared.DescribeProvisionedProductPlanOutput;
    invalidParametersException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
