import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSignalingChannelHeaders extends SpeakeasyBase {
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


export class DeleteSignalingChannelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChannelARN" })
  channelArn: string;

  @SpeakeasyMetadata({ data: "json, name=CurrentVersion" })
  currentVersion?: string;
}


export class DeleteSignalingChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeleteSignalingChannelHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: DeleteSignalingChannelRequestBody;
}


export class DeleteSignalingChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  clientLimitExceededException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteSignalingChannelOutput?: Map<string, any>;

  @SpeakeasyMetadata()
  invalidArgumentException?: any;

  @SpeakeasyMetadata()
  resourceInUseException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  versionMismatchException?: any;
}
