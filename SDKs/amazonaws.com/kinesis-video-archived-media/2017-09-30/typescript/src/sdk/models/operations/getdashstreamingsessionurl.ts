import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDashStreamingSessionUrlHeaders extends SpeakeasyBase {
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


// GetDashStreamingSessionUrlRequestBodyDashFragmentSelector
/** 
 * Contains the range of timestamps for the requested media, and the source of the timestamps. 
**/
export class GetDashStreamingSessionUrlRequestBodyDashFragmentSelector extends SpeakeasyBase {
  @Metadata({ data: "json, name=FragmentSelectorType" })
  fragmentSelectorType?: shared.DashFragmentSelectorTypeEnum;

  @Metadata({ data: "json, name=TimestampRange" })
  timestampRange?: shared.DashTimestampRange;
}

export enum GetDashStreamingSessionUrlRequestBodyDisplayFragmentNumberEnum {
    Always = "ALWAYS"
,    Never = "NEVER"
}

export enum GetDashStreamingSessionUrlRequestBodyDisplayFragmentTimestampEnum {
    Always = "ALWAYS"
,    Never = "NEVER"
}

export enum GetDashStreamingSessionUrlRequestBodyPlaybackModeEnum {
    Live = "LIVE"
,    LiveReplay = "LIVE_REPLAY"
,    OnDemand = "ON_DEMAND"
}


export class GetDashStreamingSessionUrlRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=DASHFragmentSelector" })
  dashFragmentSelector?: GetDashStreamingSessionUrlRequestBodyDashFragmentSelector;

  @Metadata({ data: "json, name=DisplayFragmentNumber" })
  displayFragmentNumber?: GetDashStreamingSessionUrlRequestBodyDisplayFragmentNumberEnum;

  @Metadata({ data: "json, name=DisplayFragmentTimestamp" })
  displayFragmentTimestamp?: GetDashStreamingSessionUrlRequestBodyDisplayFragmentTimestampEnum;

  @Metadata({ data: "json, name=Expires" })
  expires?: number;

  @Metadata({ data: "json, name=MaxManifestFragmentResults" })
  maxManifestFragmentResults?: number;

  @Metadata({ data: "json, name=PlaybackMode" })
  playbackMode?: GetDashStreamingSessionUrlRequestBodyPlaybackModeEnum;

  @Metadata({ data: "json, name=StreamARN" })
  streamArn?: string;

  @Metadata({ data: "json, name=StreamName" })
  streamName?: string;
}


export class GetDashStreamingSessionUrlRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetDashStreamingSessionUrlHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetDashStreamingSessionUrlRequestBody;
}


export class GetDashStreamingSessionUrlResponse extends SpeakeasyBase {
  @Metadata()
  clientLimitExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getDashStreamingSessionUrlOutput?: shared.GetDashStreamingSessionUrlOutput;

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
