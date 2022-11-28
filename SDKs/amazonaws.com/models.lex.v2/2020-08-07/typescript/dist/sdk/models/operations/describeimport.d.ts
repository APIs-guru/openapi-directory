import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeImportPathParams extends SpeakeasyBase {
    importId: string;
}
export declare class DescribeImportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeImportRequest extends SpeakeasyBase {
    pathParams: DescribeImportPathParams;
    headers: DescribeImportHeaders;
}
export declare class DescribeImportResponse extends SpeakeasyBase {
    contentType: string;
    describeImportResponse?: shared.DescribeImportResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
