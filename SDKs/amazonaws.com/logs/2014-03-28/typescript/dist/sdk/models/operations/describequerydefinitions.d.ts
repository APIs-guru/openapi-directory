import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeQueryDefinitionsXAmzTargetEnum {
    Logs20140328DescribeQueryDefinitions = "Logs_20140328.DescribeQueryDefinitions"
}
export declare class DescribeQueryDefinitionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeQueryDefinitionsXAmzTargetEnum;
}
export declare class DescribeQueryDefinitionsRequest extends SpeakeasyBase {
    headers: DescribeQueryDefinitionsHeaders;
    request: shared.DescribeQueryDefinitionsRequest;
}
export declare class DescribeQueryDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    describeQueryDefinitionsResponse?: shared.DescribeQueryDefinitionsResponse;
    invalidParameterException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
