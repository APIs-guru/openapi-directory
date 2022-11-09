import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSignalingChannelEndpointHeaders extends SpeakeasyBase {
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


// GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration
/** 
 * An object that contains the endpoint configuration for the <code>SINGLE_MASTER</code> channel type. 
**/
export class GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=Protocols" })
  protocols?: shared.ChannelProtocolEnum[];

  @Metadata({ data: "json, name=Role" })
  role?: shared.ChannelRoleEnum;
}


export class GetSignalingChannelEndpointRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChannelARN" })
  channelArn: string;

  @Metadata({ data: "json, name=SingleMasterChannelEndpointConfiguration" })
  singleMasterChannelEndpointConfiguration?: GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration;
}


export class GetSignalingChannelEndpointRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetSignalingChannelEndpointHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetSignalingChannelEndpointRequestBody;
}


export class GetSignalingChannelEndpointResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  clientLimitExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getSignalingChannelEndpointOutput?: shared.GetSignalingChannelEndpointOutput;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
