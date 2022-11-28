import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetHlsStreamingSessionUrlHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}

export enum GetHlsStreamingSessionUrlRequestBodyContainerFormatEnum {
    FragmentedMp4 = "FRAGMENTED_MP4",
    MpegTs = "MPEG_TS"
}

export enum GetHlsStreamingSessionUrlRequestBodyDiscontinuityModeEnum {
    Always = "ALWAYS",
    Never = "NEVER",
    OnDiscontinuity = "ON_DISCONTINUITY"
}

export enum GetHlsStreamingSessionUrlRequestBodyDisplayFragmentTimestampEnum {
    Always = "ALWAYS",
    Never = "NEVER"
}


// GetHlsStreamingSessionUrlRequestBodyHlsFragmentSelector
/** 
 * Contains the range of timestamps for the requested media, and the source of the timestamps.
**/
export class GetHlsStreamingSessionUrlRequestBodyHlsFragmentSelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FragmentSelectorType" })
  fragmentSelectorType?: shared.HlsFragmentSelectorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TimestampRange" })
  timestampRange?: shared.HlsTimestampRange;
}

export enum GetHlsStreamingSessionUrlRequestBodyPlaybackModeEnum {
    Live = "LIVE",
    LiveReplay = "LIVE_REPLAY",
    OnDemand = "ON_DEMAND"
}


export class GetHlsStreamingSessionUrlRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContainerFormat" })
  containerFormat?: GetHlsStreamingSessionUrlRequestBodyContainerFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=DiscontinuityMode" })
  discontinuityMode?: GetHlsStreamingSessionUrlRequestBodyDiscontinuityModeEnum;

  @SpeakeasyMetadata({ data: "json, name=DisplayFragmentTimestamp" })
  displayFragmentTimestamp?: GetHlsStreamingSessionUrlRequestBodyDisplayFragmentTimestampEnum;

  @SpeakeasyMetadata({ data: "json, name=Expires" })
  expires?: number;

  @SpeakeasyMetadata({ data: "json, name=HLSFragmentSelector" })
  hlsFragmentSelector?: GetHlsStreamingSessionUrlRequestBodyHlsFragmentSelector;

  @SpeakeasyMetadata({ data: "json, name=MaxMediaPlaylistFragmentResults" })
  maxMediaPlaylistFragmentResults?: number;

  @SpeakeasyMetadata({ data: "json, name=PlaybackMode" })
  playbackMode?: GetHlsStreamingSessionUrlRequestBodyPlaybackModeEnum;

  @SpeakeasyMetadata({ data: "json, name=StreamARN" })
  streamArn?: string;

  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName?: string;
}


export class GetHlsStreamingSessionUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetHlsStreamingSessionUrlHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: GetHlsStreamingSessionUrlRequestBody;
}


export class GetHlsStreamingSessionUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientLimitExceededException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getHlsStreamingSessionUrlOutput?: shared.GetHlsStreamingSessionUrlOutput;

  @SpeakeasyMetadata()
  invalidArgumentException?: any;

  @SpeakeasyMetadata()
  invalidCodecPrivateDataException?: any;

  @SpeakeasyMetadata()
  missingCodecPrivateDataException?: any;

  @SpeakeasyMetadata()
  noDataRetentionException?: any;

  @SpeakeasyMetadata()
  notAuthorizedException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unsupportedStreamMediaTypeException?: any;
}
