import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateSignalingChannelHeaders extends SpeakeasyBase {
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


// UpdateSignalingChannelRequestBodySingleMasterConfiguration
/** 
 * A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type.
**/
export class UpdateSignalingChannelRequestBodySingleMasterConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MessageTtlSeconds" })
  messageTtlSeconds?: number;
}


export class UpdateSignalingChannelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChannelARN" })
  channelArn: string;

  @SpeakeasyMetadata({ data: "json, name=CurrentVersion" })
  currentVersion: string;

  @SpeakeasyMetadata({ data: "json, name=SingleMasterConfiguration" })
  singleMasterConfiguration?: UpdateSignalingChannelRequestBodySingleMasterConfiguration;
}


export class UpdateSignalingChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateSignalingChannelHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateSignalingChannelRequestBody;
}


export class UpdateSignalingChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  clientLimitExceededException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidArgumentException?: any;

  @SpeakeasyMetadata()
  resourceInUseException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateSignalingChannelOutput?: Map<string, any>;

  @SpeakeasyMetadata()
  versionMismatchException?: any;
}
