import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDashStreamingSessionUrlHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Contains the range of timestamps for the requested media, and the source of the timestamps.
**/
export declare class GetDashStreamingSessionUrlRequestBodyDashFragmentSelector extends SpeakeasyBase {
    fragmentSelectorType?: shared.DashFragmentSelectorTypeEnum;
    timestampRange?: shared.DashTimestampRange;
}
export declare enum GetDashStreamingSessionUrlRequestBodyDisplayFragmentNumberEnum {
    Always = "ALWAYS",
    Never = "NEVER"
}
export declare enum GetDashStreamingSessionUrlRequestBodyDisplayFragmentTimestampEnum {
    Always = "ALWAYS",
    Never = "NEVER"
}
export declare enum GetDashStreamingSessionUrlRequestBodyPlaybackModeEnum {
    Live = "LIVE",
    LiveReplay = "LIVE_REPLAY",
    OnDemand = "ON_DEMAND"
}
export declare class GetDashStreamingSessionUrlRequestBody extends SpeakeasyBase {
    dashFragmentSelector?: GetDashStreamingSessionUrlRequestBodyDashFragmentSelector;
    displayFragmentNumber?: GetDashStreamingSessionUrlRequestBodyDisplayFragmentNumberEnum;
    displayFragmentTimestamp?: GetDashStreamingSessionUrlRequestBodyDisplayFragmentTimestampEnum;
    expires?: number;
    maxManifestFragmentResults?: number;
    playbackMode?: GetDashStreamingSessionUrlRequestBodyPlaybackModeEnum;
    streamArn?: string;
    streamName?: string;
}
export declare class GetDashStreamingSessionUrlRequest extends SpeakeasyBase {
    headers: GetDashStreamingSessionUrlHeaders;
    request: GetDashStreamingSessionUrlRequestBody;
}
export declare class GetDashStreamingSessionUrlResponse extends SpeakeasyBase {
    clientLimitExceededException?: any;
    contentType: string;
    getDashStreamingSessionUrlOutput?: shared.GetDashStreamingSessionUrlOutput;
    invalidArgumentException?: any;
    invalidCodecPrivateDataException?: any;
    missingCodecPrivateDataException?: any;
    noDataRetentionException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    unsupportedStreamMediaTypeException?: any;
}
