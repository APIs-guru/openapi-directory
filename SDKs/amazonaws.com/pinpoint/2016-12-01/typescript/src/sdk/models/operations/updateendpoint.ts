import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateEndpointPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=endpoint-id" })
  endpointId: string;
}


export class UpdateEndpointHeaders extends SpeakeasyBase {
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


// UpdateEndpointRequestBodyEndpointRequest
/** 
 * Specifies the channel type and other settings for an endpoint.
**/
export class UpdateEndpointRequestBodyEndpointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=ChannelType" })
  channelType?: shared.ChannelTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Demographic" })
  demographic?: shared.EndpointDemographic;

  @SpeakeasyMetadata({ data: "json, name=EffectiveDate" })
  effectiveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointStatus" })
  endpointStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=Location" })
  location?: shared.EndpointLocation;

  @SpeakeasyMetadata({ data: "json, name=Metrics" })
  metrics?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=OptOut" })
  optOut?: string;

  @SpeakeasyMetadata({ data: "json, name=RequestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=User" })
  user?: shared.EndpointUser;
}


export class UpdateEndpointRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointRequest" })
  endpointRequest: UpdateEndpointRequestBodyEndpointRequest;
}


export class UpdateEndpointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateEndpointPathParams;

  @SpeakeasyMetadata()
  headers: UpdateEndpointHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateEndpointRequestBody;
}


export class UpdateEndpointResponse extends SpeakeasyBase {
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
  updateEndpointResponse?: shared.UpdateEndpointResponse;
}
