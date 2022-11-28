import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDataEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum GetDataEndpointRequestBodyApiNameEnum {
    PutMedia = "PUT_MEDIA",
    GetMedia = "GET_MEDIA",
    ListFragments = "LIST_FRAGMENTS",
    GetMediaForFragmentList = "GET_MEDIA_FOR_FRAGMENT_LIST",
    GetHlsStreamingSessionUrl = "GET_HLS_STREAMING_SESSION_URL",
    GetDashStreamingSessionUrl = "GET_DASH_STREAMING_SESSION_URL",
    GetClip = "GET_CLIP"
}
export declare class GetDataEndpointRequestBody extends SpeakeasyBase {
    apiName: GetDataEndpointRequestBodyApiNameEnum;
    streamArn?: string;
    streamName?: string;
}
export declare class GetDataEndpointRequest extends SpeakeasyBase {
    headers: GetDataEndpointHeaders;
    request: GetDataEndpointRequestBody;
}
export declare class GetDataEndpointResponse extends SpeakeasyBase {
    clientLimitExceededException?: any;
    contentType: string;
    getDataEndpointOutput?: shared.GetDataEndpointOutput;
    invalidArgumentException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
