import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeLayersXAmzTargetEnum {
    OpsWorks20130218DescribeLayers = "OpsWorks_20130218.DescribeLayers"
}
export declare class DescribeLayersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLayersXAmzTargetEnum;
}
export declare class DescribeLayersRequest extends SpeakeasyBase {
    headers: DescribeLayersHeaders;
    request: shared.DescribeLayersRequest;
}
export declare class DescribeLayersResponse extends SpeakeasyBase {
    contentType: string;
    describeLayersResult?: shared.DescribeLayersResult;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
