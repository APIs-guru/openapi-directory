import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeClientPropertiesXAmzTargetEnum {
    WorkspacesServiceDescribeClientProperties = "WorkspacesService.DescribeClientProperties"
}
export declare class DescribeClientPropertiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeClientPropertiesXAmzTargetEnum;
}
export declare class DescribeClientPropertiesRequest extends SpeakeasyBase {
    headers: DescribeClientPropertiesHeaders;
    request: shared.DescribeClientPropertiesRequest;
}
export declare class DescribeClientPropertiesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeClientPropertiesResult?: shared.DescribeClientPropertiesResult;
    invalidParameterValuesException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
