import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutAccountSuppressionAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutAccountSuppressionAttributesRequestBody extends SpeakeasyBase {
    suppressedReasons?: shared.SuppressionListReasonEnum[];
}
export declare class PutAccountSuppressionAttributesRequest extends SpeakeasyBase {
    headers: PutAccountSuppressionAttributesHeaders;
    request: PutAccountSuppressionAttributesRequestBody;
}
export declare class PutAccountSuppressionAttributesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    putAccountSuppressionAttributesResponse?: Map<string, any>;
    statusCode: number;
    tooManyRequestsException?: any;
}
