import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeStatementXAmzTargetEnum {
    RedshiftDataDescribeStatement = "RedshiftData.DescribeStatement"
}
export declare class DescribeStatementHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeStatementXAmzTargetEnum;
}
export declare class DescribeStatementRequest extends SpeakeasyBase {
    headers: DescribeStatementHeaders;
    request: shared.DescribeStatementRequest;
}
export declare class DescribeStatementResponse extends SpeakeasyBase {
    contentType: string;
    describeStatementResponse?: shared.DescribeStatementResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
