import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeFleetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeFleetRequestBody extends SpeakeasyBase {
    fleet: string;
}
export declare class DescribeFleetRequest extends SpeakeasyBase {
    headers: DescribeFleetHeaders;
    request: DescribeFleetRequestBody;
}
export declare class DescribeFleetResponse extends SpeakeasyBase {
    contentType: string;
    describeFleetResponse?: shared.DescribeFleetResponse;
    internalServerException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
