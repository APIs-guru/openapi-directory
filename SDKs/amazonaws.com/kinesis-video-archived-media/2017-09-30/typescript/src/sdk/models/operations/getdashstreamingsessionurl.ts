import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDashStreamingSessionUrlHeaders extends SpeakeasyBase {
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


// GetDashStreamingSessionUrlRequestBodyDashFragmentSelector
/** 
 * Contains the range of timestamps for the requested media, and the source of the timestamps. 
**/
export class GetDashStreamingSessionUrlRequestBodyDashFragmentSelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FragmentSelectorType" })
  fragmentSelectorType?: shared.DashFragmentSelectorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TimestampRange" })
  timestampRange?: shared.DashTimestampRange;
}

export enum GetDashStreamingSessionUrlRequestBodyDisplayFragmentNumberEnum {
    Always = "ALWAYS",
    Never = "NEVER"
}

export enum GetDashStreamingSessionUrlRequestBodyDisplayFragmentTimestampEnum {
    Always = "ALWAYS",
    Never = "NEVER"
}

export enum GetDashStreamingSessionUrlRequestBodyPlaybackModeEnum {
    Live = "LIVE",
    LiveReplay = "LIVE_REPLAY",
    OnDemand = "ON_DEMAND"
}


export class GetDashStreamingSessionUrlRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DASHFragmentSelector" })
  dashFragmentSelector?: GetDashStreamingSessionUrlRequestBodyDashFragmentSelector;

  @SpeakeasyMetadata({ data: "json, name=DisplayFragmentNumber" })
  displayFragmentNumber?: GetDashStreamingSessionUrlRequestBodyDisplayFragmentNumberEnum;

  @SpeakeasyMetadata({ data: "json, name=DisplayFragmentTimestamp" })
  displayFragmentTimestamp?: GetDashStreamingSessionUrlRequestBodyDisplayFragmentTimestampEnum;

  @SpeakeasyMetadata({ data: "json, name=Expires" })
  expires?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxManifestFragmentResults" })
  maxManifestFragmentResults?: number;

  @SpeakeasyMetadata({ data: "json, name=PlaybackMode" })
  playbackMode?: GetDashStreamingSessionUrlRequestBodyPlaybackModeEnum;

  @SpeakeasyMetadata({ data: "json, name=StreamARN" })
  streamArn?: string;

  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName?: string;
}


export class GetDashStreamingSessionUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetDashStreamingSessionUrlHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: GetDashStreamingSessionUrlRequestBody;
}


export class GetDashStreamingSessionUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientLimitExceededException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDashStreamingSessionUrlOutput?: shared.GetDashStreamingSessionUrlOutput;

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
