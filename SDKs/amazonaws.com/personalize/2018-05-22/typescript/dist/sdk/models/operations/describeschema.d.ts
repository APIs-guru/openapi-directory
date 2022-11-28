import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeSchemaXAmzTargetEnum {
    AmazonPersonalizeDescribeSchema = "AmazonPersonalize.DescribeSchema"
}
export declare class DescribeSchemaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSchemaXAmzTargetEnum;
}
export declare class DescribeSchemaRequest extends SpeakeasyBase {
    headers: DescribeSchemaHeaders;
    request: shared.DescribeSchemaRequest;
}
export declare class DescribeSchemaResponse extends SpeakeasyBase {
    contentType: string;
    describeSchemaResponse?: shared.DescribeSchemaResponse;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
