import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeConstraintXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeConstraint = "AWS242ServiceCatalogService.DescribeConstraint"
}
export declare class DescribeConstraintHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeConstraintXAmzTargetEnum;
}
export declare class DescribeConstraintRequest extends SpeakeasyBase {
    headers: DescribeConstraintHeaders;
    request: shared.DescribeConstraintInput;
}
export declare class DescribeConstraintResponse extends SpeakeasyBase {
    contentType: string;
    describeConstraintOutput?: shared.DescribeConstraintOutput;
    resourceNotFoundException?: any;
    statusCode: number;
}
