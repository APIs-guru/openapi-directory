import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateSegmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=segment-id" })
  segmentId: string;
}


export class UpdateSegmentHeaders extends SpeakeasyBase {
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


// UpdateSegmentRequestBodyWriteSegmentRequest
/** 
 * Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.
**/
export class UpdateSegmentRequestBodyWriteSegmentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Dimensions" })
  dimensions?: shared.SegmentDimensions;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SegmentGroups" })
  segmentGroups?: shared.SegmentGroupList;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class UpdateSegmentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=WriteSegmentRequest" })
  writeSegmentRequest: UpdateSegmentRequestBodyWriteSegmentRequest;
}


export class UpdateSegmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateSegmentPathParams;

  @Metadata()
  headers: UpdateSegmentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateSegmentRequestBody;
}


export class UpdateSegmentResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  methodNotAllowedException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  payloadTooLargeException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  updateSegmentResponse?: shared.UpdateSegmentResponse;
}
