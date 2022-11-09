import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSampleDataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Contains information about the source configuration in Amazon S3.
**/
export declare class GetSampleDataRequestBodyS3SourceConfig extends SpeakeasyBase {
    fileFormatDescriptor?: shared.FileFormatDescriptor;
    historicalDataPathList?: string[];
    roleArn?: string;
    templatedPathList?: string[];
}
export declare class GetSampleDataRequestBody extends SpeakeasyBase {
    s3SourceConfig?: GetSampleDataRequestBodyS3SourceConfig;
}
export declare class GetSampleDataRequest extends SpeakeasyBase {
    headers: GetSampleDataHeaders;
    request: GetSampleDataRequestBody;
}
export declare class GetSampleDataResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getSampleDataResponse?: shared.GetSampleDataResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    validationException?: any;
}
