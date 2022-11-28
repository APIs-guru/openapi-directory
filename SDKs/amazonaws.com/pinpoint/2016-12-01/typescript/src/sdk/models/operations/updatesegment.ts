import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSegmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=segment-id" })
  segmentId: string;
}


export class UpdateSegmentHeaders extends SpeakeasyBase {
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


// UpdateSegmentRequestBodyWriteSegmentRequest
/** 
 * Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.
**/
export class UpdateSegmentRequestBodyWriteSegmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Dimensions" })
  dimensions?: shared.SegmentDimensions;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SegmentGroups" })
  segmentGroups?: shared.SegmentGroupList;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class UpdateSegmentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WriteSegmentRequest" })
  writeSegmentRequest: UpdateSegmentRequestBodyWriteSegmentRequest;
}


export class UpdateSegmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSegmentPathParams;

  @SpeakeasyMetadata()
  headers: UpdateSegmentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateSegmentRequestBody;
}


export class UpdateSegmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  forbiddenException?: any;

  @SpeakeasyMetadata()
  internalServerErrorException?: any;

  @SpeakeasyMetadata()
  methodNotAllowedException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  payloadTooLargeException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  updateSegmentResponse?: shared.UpdateSegmentResponse;
}
