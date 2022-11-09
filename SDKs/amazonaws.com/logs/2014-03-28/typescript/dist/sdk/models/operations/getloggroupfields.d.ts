import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetLogGroupFieldsXAmzTargetEnum {
    Logs20140328GetLogGroupFields = "Logs_20140328.GetLogGroupFields"
}
export declare class GetLogGroupFieldsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLogGroupFieldsXAmzTargetEnum;
}
export declare class GetLogGroupFieldsRequest extends SpeakeasyBase {
    headers: GetLogGroupFieldsHeaders;
    request: shared.GetLogGroupFieldsRequest;
}
export declare class GetLogGroupFieldsResponse extends SpeakeasyBase {
    contentType: string;
    getLogGroupFieldsResponse?: shared.GetLogGroupFieldsResponse;
    invalidParameterException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
