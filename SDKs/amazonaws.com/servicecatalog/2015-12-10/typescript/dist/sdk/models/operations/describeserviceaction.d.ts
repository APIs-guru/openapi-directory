import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeServiceActionXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeServiceAction = "AWS242ServiceCatalogService.DescribeServiceAction"
}
export declare class DescribeServiceActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeServiceActionXAmzTargetEnum;
}
export declare class DescribeServiceActionRequest extends SpeakeasyBase {
    headers: DescribeServiceActionHeaders;
    request: shared.DescribeServiceActionInput;
}
export declare class DescribeServiceActionResponse extends SpeakeasyBase {
    contentType: string;
    describeServiceActionOutput?: shared.DescribeServiceActionOutput;
    resourceNotFoundException?: any;
    statusCode: number;
}
