import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateEndpointsBatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;
}


export class UpdateEndpointsBatchHeaders extends SpeakeasyBase {
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


// UpdateEndpointsBatchRequestBodyEndpointBatchRequest
/** 
 * Specifies a batch of endpoints to create or update and the settings and attributes to set or change for each endpoint.
**/
export class UpdateEndpointsBatchRequestBodyEndpointBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Item", elemType: shared.EndpointBatchItem })
  item?: shared.EndpointBatchItem[];
}


export class UpdateEndpointsBatchRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointBatchRequest" })
  endpointBatchRequest: UpdateEndpointsBatchRequestBodyEndpointBatchRequest;
}


export class UpdateEndpointsBatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateEndpointsBatchPathParams;

  @Metadata()
  headers: UpdateEndpointsBatchHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateEndpointsBatchRequestBody;
}


export class UpdateEndpointsBatchResponse extends SpeakeasyBase {
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
  updateEndpointsBatchResponse?: shared.UpdateEndpointsBatchResponse;
}
