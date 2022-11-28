import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeExportPathParams extends SpeakeasyBase {
    exportId: string;
}
export declare class DescribeExportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeExportRequest extends SpeakeasyBase {
    pathParams: DescribeExportPathParams;
    headers: DescribeExportHeaders;
}
export declare class DescribeExportResponse extends SpeakeasyBase {
    contentType: string;
    describeExportResponse?: shared.DescribeExportResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
