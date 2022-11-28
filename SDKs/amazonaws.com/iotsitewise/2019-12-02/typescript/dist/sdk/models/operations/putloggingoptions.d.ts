import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutLoggingOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Contains logging options.
**/
export declare class PutLoggingOptionsRequestBodyLoggingOptions extends SpeakeasyBase {
    level?: shared.LoggingLevelEnum;
}
export declare class PutLoggingOptionsRequestBody extends SpeakeasyBase {
    loggingOptions: PutLoggingOptionsRequestBodyLoggingOptions;
}
export declare class PutLoggingOptionsRequest extends SpeakeasyBase {
    headers: PutLoggingOptionsHeaders;
    request: PutLoggingOptionsRequestBody;
}
export declare class PutLoggingOptionsResponse extends SpeakeasyBase {
    conflictingOperationException?: any;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    putLoggingOptionsResponse?: Map<string, any>;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
