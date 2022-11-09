import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateSignalingChannelHeaders extends SpeakeasyBase {
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


// UpdateSignalingChannelRequestBodySingleMasterConfiguration
/** 
 * A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type.
**/
export class UpdateSignalingChannelRequestBodySingleMasterConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=MessageTtlSeconds" })
  messageTtlSeconds?: number;
}


export class UpdateSignalingChannelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChannelARN" })
  channelArn: string;

  @Metadata({ data: "json, name=CurrentVersion" })
  currentVersion: string;

  @Metadata({ data: "json, name=SingleMasterConfiguration" })
  singleMasterConfiguration?: UpdateSignalingChannelRequestBodySingleMasterConfiguration;
}


export class UpdateSignalingChannelRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateSignalingChannelHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateSignalingChannelRequestBody;
}


export class UpdateSignalingChannelResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  clientLimitExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateSignalingChannelOutput?: Map<string, any>;

  @Metadata()
  versionMismatchException?: any;
}
