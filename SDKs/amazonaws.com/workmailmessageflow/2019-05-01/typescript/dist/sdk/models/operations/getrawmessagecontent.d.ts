import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRawMessageContentPathParams extends SpeakeasyBase {
    messageId: string;
}
export declare class GetRawMessageContentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRawMessageContentRequest extends SpeakeasyBase {
    pathParams: GetRawMessageContentPathParams;
    headers: GetRawMessageContentHeaders;
}
export declare class GetRawMessageContentResponse extends SpeakeasyBase {
    contentType: string;
    getRawMessageContentResponse?: shared.GetRawMessageContentResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
