import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateSignalingChannelHeaders extends SpeakeasyBase {
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

export enum CreateSignalingChannelRequestBodyChannelTypeEnum {
    SingleMaster = "SINGLE_MASTER"
}


// CreateSignalingChannelRequestBodySingleMasterConfiguration
/** 
 * A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type.
**/
export class CreateSignalingChannelRequestBodySingleMasterConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=MessageTtlSeconds" })
  messageTtlSeconds?: number;
}


export class CreateSignalingChannelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChannelName" })
  channelName: string;

  @Metadata({ data: "json, name=ChannelType" })
  channelType?: CreateSignalingChannelRequestBodyChannelTypeEnum;

  @Metadata({ data: "json, name=SingleMasterConfiguration" })
  singleMasterConfiguration?: CreateSignalingChannelRequestBodySingleMasterConfiguration;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: shared.Tag[];
}


export class CreateSignalingChannelRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateSignalingChannelHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateSignalingChannelRequestBody;
}


export class CreateSignalingChannelResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  accountChannelLimitExceededException?: any;

  @Metadata()
  clientLimitExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createSignalingChannelOutput?: shared.CreateSignalingChannelOutput;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagsPerResourceExceededLimitException?: any;
}
