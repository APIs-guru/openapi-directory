import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetClipHeaders extends SpeakeasyBase {
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


// GetClipRequestBodyClipFragmentSelector
/** 
 * <p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Fragments that have duplicate producer timestamps are deduplicated. This means that if producers are producing a stream of fragments with producer timestamps that are approximately equal to the true clock time, the clip will contain all of the fragments within the requested timestamp range. If some fragments are ingested within the same time range and very different points in time, only the oldest ingested collection of fragments are returned.</p>
**/
export class GetClipRequestBodyClipFragmentSelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FragmentSelectorType" })
  fragmentSelectorType?: shared.ClipFragmentSelectorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TimestampRange" })
  timestampRange?: shared.ClipTimestampRange;
}


export class GetClipRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClipFragmentSelector" })
  clipFragmentSelector: GetClipRequestBodyClipFragmentSelector;

  @SpeakeasyMetadata({ data: "json, name=StreamARN" })
  streamArn?: string;

  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName?: string;
}


export class GetClipRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetClipHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: GetClipRequestBody;
}


export class GetClipResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientLimitExceededException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getClipOutput?: shared.GetClipOutput;

  @SpeakeasyMetadata()
  invalidArgumentException?: any;

  @SpeakeasyMetadata()
  invalidCodecPrivateDataException?: any;

  @SpeakeasyMetadata()
  invalidMediaFrameException?: any;

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
