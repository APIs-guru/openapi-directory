import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetStreamRequestBody extends SpeakeasyBase {
    channelArn: string;
}
export declare class GetStreamRequest extends SpeakeasyBase {
    headers: GetStreamHeaders;
    request: GetStreamRequestBody;
}
export declare class GetStreamResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    channelNotBroadcasting?: any;
    contentType: string;
    getStreamResponse?: shared.GetStreamResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
