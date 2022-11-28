import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetHlsStreamingSessionUrlHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum GetHlsStreamingSessionUrlRequestBodyContainerFormatEnum {
    FragmentedMp4 = "FRAGMENTED_MP4",
    MpegTs = "MPEG_TS"
}
export declare enum GetHlsStreamingSessionUrlRequestBodyDiscontinuityModeEnum {
    Always = "ALWAYS",
    Never = "NEVER",
    OnDiscontinuity = "ON_DISCONTINUITY"
}
export declare enum GetHlsStreamingSessionUrlRequestBodyDisplayFragmentTimestampEnum {
    Always = "ALWAYS",
    Never = "NEVER"
}
/**
 * Contains the range of timestamps for the requested media, and the source of the timestamps.
**/
export declare class GetHlsStreamingSessionUrlRequestBodyHlsFragmentSelector extends SpeakeasyBase {
    fragmentSelectorType?: shared.HlsFragmentSelectorTypeEnum;
    timestampRange?: shared.HlsTimestampRange;
}
export declare enum GetHlsStreamingSessionUrlRequestBodyPlaybackModeEnum {
    Live = "LIVE",
    LiveReplay = "LIVE_REPLAY",
    OnDemand = "ON_DEMAND"
}
export declare class GetHlsStreamingSessionUrlRequestBody extends SpeakeasyBase {
    containerFormat?: GetHlsStreamingSessionUrlRequestBodyContainerFormatEnum;
    discontinuityMode?: GetHlsStreamingSessionUrlRequestBodyDiscontinuityModeEnum;
    displayFragmentTimestamp?: GetHlsStreamingSessionUrlRequestBodyDisplayFragmentTimestampEnum;
    expires?: number;
    hlsFragmentSelector?: GetHlsStreamingSessionUrlRequestBodyHlsFragmentSelector;
    maxMediaPlaylistFragmentResults?: number;
    playbackMode?: GetHlsStreamingSessionUrlRequestBodyPlaybackModeEnum;
    streamArn?: string;
    streamName?: string;
}
export declare class GetHlsStreamingSessionUrlRequest extends SpeakeasyBase {
    headers: GetHlsStreamingSessionUrlHeaders;
    request: GetHlsStreamingSessionUrlRequestBody;
}
export declare class GetHlsStreamingSessionUrlResponse extends SpeakeasyBase {
    clientLimitExceededException?: any;
    contentType: string;
    getHlsStreamingSessionUrlOutput?: shared.GetHlsStreamingSessionUrlOutput;
    invalidArgumentException?: any;
    invalidCodecPrivateDataException?: any;
    missingCodecPrivateDataException?: any;
    noDataRetentionException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    unsupportedStreamMediaTypeException?: any;
}
