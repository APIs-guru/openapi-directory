import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeginTransactionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BeginTransactionRequestBody extends SpeakeasyBase {
    database?: string;
    resourceArn: string;
    schema?: string;
    secretArn: string;
}
export declare class BeginTransactionRequest extends SpeakeasyBase {
    headers: BeginTransactionHeaders;
    request: BeginTransactionRequestBody;
}
export declare class BeginTransactionResponse extends SpeakeasyBase {
    badRequestException?: any;
    beginTransactionResponse?: shared.BeginTransactionResponse;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    serviceUnavailableError?: any;
    statementTimeoutException?: any;
    statusCode: number;
}
