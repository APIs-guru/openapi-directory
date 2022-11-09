import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateEndpointPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=endpoint-id" })
  endpointId: string;
}


export class UpdateEndpointHeaders extends SpeakeasyBase {
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


// UpdateEndpointRequestBodyEndpointRequest
/** 
 * Specifies the channel type and other settings for an endpoint.
**/
export class UpdateEndpointRequestBodyEndpointRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Address" })
  address?: string;

  @Metadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string[]>;

  @Metadata({ data: "json, name=ChannelType" })
  channelType?: shared.ChannelTypeEnum;

  @Metadata({ data: "json, name=Demographic" })
  demographic?: shared.EndpointDemographic;

  @Metadata({ data: "json, name=EffectiveDate" })
  effectiveDate?: string;

  @Metadata({ data: "json, name=EndpointStatus" })
  endpointStatus?: string;

  @Metadata({ data: "json, name=Location" })
  location?: shared.EndpointLocation;

  @Metadata({ data: "json, name=Metrics" })
  metrics?: Map<string, number>;

  @Metadata({ data: "json, name=OptOut" })
  optOut?: string;

  @Metadata({ data: "json, name=RequestId" })
  requestId?: string;

  @Metadata({ data: "json, name=User" })
  user?: shared.EndpointUser;
}


export class UpdateEndpointRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointRequest" })
  endpointRequest: UpdateEndpointRequestBodyEndpointRequest;
}


export class UpdateEndpointRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateEndpointPathParams;

  @Metadata()
  headers: UpdateEndpointHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateEndpointRequestBody;
}


export class UpdateEndpointResponse extends SpeakeasyBase {
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
  updateEndpointResponse?: shared.UpdateEndpointResponse;
}
