import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeServiceActionExecutionParametersXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeServiceActionExecutionParameters = "AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters"
}
export declare class DescribeServiceActionExecutionParametersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeServiceActionExecutionParametersXAmzTargetEnum;
}
export declare class DescribeServiceActionExecutionParametersRequest extends SpeakeasyBase {
    headers: DescribeServiceActionExecutionParametersHeaders;
    request: shared.DescribeServiceActionExecutionParametersInput;
}
export declare class DescribeServiceActionExecutionParametersResponse extends SpeakeasyBase {
    contentType: string;
    describeServiceActionExecutionParametersOutput?: shared.DescribeServiceActionExecutionParametersOutput;
    invalidParametersException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
