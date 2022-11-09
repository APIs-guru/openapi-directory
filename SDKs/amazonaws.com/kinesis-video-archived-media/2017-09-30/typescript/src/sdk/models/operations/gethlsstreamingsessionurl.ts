import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetHlsStreamingSessionUrlHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}

export enum GetHlsStreamingSessionUrlRequestBodyContainerFormatEnum {
    FragmentedMp4 = "FRAGMENTED_MP4"
,    MpegTs = "MPEG_TS"
}

export enum GetHlsStreamingSessionUrlRequestBodyDiscontinuityModeEnum {
    Always = "ALWAYS"
,    Never = "NEVER"
,    OnDiscontinuity = "ON_DISCONTINUITY"
}

export enum GetHlsStreamingSessionUrlRequestBodyDisplayFragmentTimestampEnum {
    Always = "ALWAYS"
,    Never = "NEVER"
}


// GetHlsStreamingSessionUrlRequestBodyHlsFragmentSelector
/** 
 * Contains the range of timestamps for the requested media, and the source of the timestamps.
**/
export class GetHlsStreamingSessionUrlRequestBodyHlsFragmentSelector extends SpeakeasyBase {
  @Metadata({ data: "json, name=FragmentSelectorType" })
  fragmentSelectorType?: shared.HlsFragmentSelectorTypeEnum;

  @Metadata({ data: "json, name=TimestampRange" })
  timestampRange?: shared.HlsTimestampRange;
}

export enum GetHlsStreamingSessionUrlRequestBodyPlaybackModeEnum {
    Live = "LIVE"
,    LiveReplay = "LIVE_REPLAY"
,    OnDemand = "ON_DEMAND"
}


export class GetHlsStreamingSessionUrlRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContainerFormat" })
  containerFormat?: GetHlsStreamingSessionUrlRequestBodyContainerFormatEnum;

  @Metadata({ data: "json, name=DiscontinuityMode" })
  discontinuityMode?: GetHlsStreamingSessionUrlRequestBodyDiscontinuityModeEnum;

  @Metadata({ data: "json, name=DisplayFragmentTimestamp" })
  displayFragmentTimestamp?: GetHlsStreamingSessionUrlRequestBodyDisplayFragmentTimestampEnum;

  @Metadata({ data: "json, name=Expires" })
  expires?: number;

  @Metadata({ data: "json, name=HLSFragmentSelector" })
  hlsFragmentSelector?: GetHlsStreamingSessionUrlRequestBodyHlsFragmentSelector;

  @Metadata({ data: "json, name=MaxMediaPlaylistFragmentResults" })
  maxMediaPlaylistFragmentResults?: number;

  @Metadata({ data: "json, name=PlaybackMode" })
  playbackMode?: GetHlsStreamingSessionUrlRequestBodyPlaybackModeEnum;

  @Metadata({ data: "json, name=StreamARN" })
  streamArn?: string;

  @Metadata({ data: "json, name=StreamName" })
  streamName?: string;
}


export class GetHlsStreamingSessionUrlRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetHlsStreamingSessionUrlHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetHlsStreamingSessionUrlRequestBody;
}


export class GetHlsStreamingSessionUrlResponse extends SpeakeasyBase {
  @Metadata()
  clientLimitExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getHlsStreamingSessionUrlOutput?: shared.GetHlsStreamingSessionUrlOutput;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  invalidCodecPrivateDataException?: any;

  @Metadata()
  missingCodecPrivateDataException?: any;

  @Metadata()
  noDataRetentionException?: any;

  @Metadata()
  notAuthorizedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedStreamMediaTypeException?: any;
}
