import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetClipHeaders extends SpeakeasyBase {
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


// GetClipRequestBodyClipFragmentSelector
/** 
 * <p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Fragments that have duplicate producer timestamps are deduplicated. This means that if producers are producing a stream of fragments with producer timestamps that are approximately equal to the true clock time, the clip will contain all of the fragments within the requested timestamp range. If some fragments are ingested within the same time range and very different points in time, only the oldest ingested collection of fragments are returned.</p>
**/
export class GetClipRequestBodyClipFragmentSelector extends SpeakeasyBase {
  @Metadata({ data: "json, name=FragmentSelectorType" })
  fragmentSelectorType?: shared.ClipFragmentSelectorTypeEnum;

  @Metadata({ data: "json, name=TimestampRange" })
  timestampRange?: shared.ClipTimestampRange;
}


export class GetClipRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClipFragmentSelector" })
  clipFragmentSelector: GetClipRequestBodyClipFragmentSelector;

  @Metadata({ data: "json, name=StreamARN" })
  streamArn?: string;

  @Metadata({ data: "json, name=StreamName" })
  streamName?: string;
}


export class GetClipRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetClipHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetClipRequestBody;
}


export class GetClipResponse extends SpeakeasyBase {
  @Metadata()
  clientLimitExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getClipOutput?: shared.GetClipOutput;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  invalidCodecPrivateDataException?: any;

  @Metadata()
  invalidMediaFrameException?: any;

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
