import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetChannelRequestBody extends SpeakeasyBase {
    arn: string;
}
export declare class GetChannelRequest extends SpeakeasyBase {
    headers: GetChannelHeaders;
    request: GetChannelRequestBody;
}
export declare class GetChannelResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getChannelResponse?: shared.GetChannelResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
