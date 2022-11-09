import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateSegmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;
}


export class CreateSegmentHeaders extends SpeakeasyBase {
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


// CreateSegmentRequestBodyWriteSegmentRequest
/** 
 * Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.
**/
export class CreateSegmentRequestBodyWriteSegmentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Dimensions" })
  dimensions?: shared.SegmentDimensions;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SegmentGroups" })
  segmentGroups?: shared.SegmentGroupList;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateSegmentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=WriteSegmentRequest" })
  writeSegmentRequest: CreateSegmentRequestBodyWriteSegmentRequest;
}


export class CreateSegmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateSegmentPathParams;

  @Metadata()
  headers: CreateSegmentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateSegmentRequestBody;
}


export class CreateSegmentResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createSegmentResponse?: shared.CreateSegmentResponse;

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
}
