import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateEndpointsBatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;
}


export class UpdateEndpointsBatchHeaders extends SpeakeasyBase {
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


// UpdateEndpointsBatchRequestBodyEndpointBatchRequest
/** 
 * Specifies a batch of endpoints to create or update and the settings and attributes to set or change for each endpoint.
**/
export class UpdateEndpointsBatchRequestBodyEndpointBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Item", elemType: shared.EndpointBatchItem })
  item?: shared.EndpointBatchItem[];
}


export class UpdateEndpointsBatchRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointBatchRequest" })
  endpointBatchRequest: UpdateEndpointsBatchRequestBodyEndpointBatchRequest;
}


export class UpdateEndpointsBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateEndpointsBatchPathParams;

  @SpeakeasyMetadata()
  headers: UpdateEndpointsBatchHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateEndpointsBatchRequestBody;
}


export class UpdateEndpointsBatchResponse extends SpeakeasyBase {
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
  updateEndpointsBatchResponse?: shared.UpdateEndpointsBatchResponse;
}
