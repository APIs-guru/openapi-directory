import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSignalingChannelEndpointHeaders extends SpeakeasyBase {
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


// GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration
/** 
 * An object that contains the endpoint configuration for the <code>SINGLE_MASTER</code> channel type. 
**/
export class GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Protocols" })
  protocols?: shared.ChannelProtocolEnum[];

  @SpeakeasyMetadata({ data: "json, name=Role" })
  role?: shared.ChannelRoleEnum;
}


export class GetSignalingChannelEndpointRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChannelARN" })
  channelArn: string;

  @SpeakeasyMetadata({ data: "json, name=SingleMasterChannelEndpointConfiguration" })
  singleMasterChannelEndpointConfiguration?: GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration;
}


export class GetSignalingChannelEndpointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetSignalingChannelEndpointHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: GetSignalingChannelEndpointRequestBody;
}


export class GetSignalingChannelEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  clientLimitExceededException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSignalingChannelEndpointOutput?: shared.GetSignalingChannelEndpointOutput;

  @SpeakeasyMetadata()
  invalidArgumentException?: any;

  @SpeakeasyMetadata()
  resourceInUseException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
