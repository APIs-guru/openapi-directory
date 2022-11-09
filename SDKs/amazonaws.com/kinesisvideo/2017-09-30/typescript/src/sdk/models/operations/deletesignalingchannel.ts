import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSignalingChannelHeaders extends SpeakeasyBase {
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


export class DeleteSignalingChannelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChannelARN" })
  channelArn: string;

  @Metadata({ data: "json, name=CurrentVersion" })
  currentVersion?: string;
}


export class DeleteSignalingChannelRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteSignalingChannelHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DeleteSignalingChannelRequestBody;
}


export class DeleteSignalingChannelResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  clientLimitExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteSignalingChannelOutput?: Map<string, any>;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  versionMismatchException?: any;
}
