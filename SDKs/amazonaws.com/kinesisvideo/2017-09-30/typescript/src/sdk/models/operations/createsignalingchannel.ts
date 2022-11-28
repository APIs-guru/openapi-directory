import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateSignalingChannelHeaders extends SpeakeasyBase {
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

export enum CreateSignalingChannelRequestBodyChannelTypeEnum {
    SingleMaster = "SINGLE_MASTER"
}


// CreateSignalingChannelRequestBodySingleMasterConfiguration
/** 
 * A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type.
**/
export class CreateSignalingChannelRequestBodySingleMasterConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MessageTtlSeconds" })
  messageTtlSeconds?: number;
}


export class CreateSignalingChannelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChannelName" })
  channelName: string;

  @SpeakeasyMetadata({ data: "json, name=ChannelType" })
  channelType?: CreateSignalingChannelRequestBodyChannelTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=SingleMasterConfiguration" })
  singleMasterConfiguration?: CreateSignalingChannelRequestBodySingleMasterConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: shared.Tag[];
}


export class CreateSignalingChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateSignalingChannelHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateSignalingChannelRequestBody;
}


export class CreateSignalingChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  accountChannelLimitExceededException?: any;

  @SpeakeasyMetadata()
  clientLimitExceededException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createSignalingChannelOutput?: shared.CreateSignalingChannelOutput;

  @SpeakeasyMetadata()
  invalidArgumentException?: any;

  @SpeakeasyMetadata()
  resourceInUseException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tagsPerResourceExceededLimitException?: any;
}
