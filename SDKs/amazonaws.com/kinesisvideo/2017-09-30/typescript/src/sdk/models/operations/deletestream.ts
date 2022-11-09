import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteStreamHeaders extends SpeakeasyBase {
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


export class DeleteStreamRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=CurrentVersion" })
  currentVersion?: string;

  @Metadata({ data: "json, name=StreamARN" })
  streamArn: string;
}


export class DeleteStreamRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteStreamHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DeleteStreamRequestBody;
}


export class DeleteStreamResponse extends SpeakeasyBase {
  @Metadata()
  clientLimitExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteStreamOutput?: Map<string, any>;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  notAuthorizedException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  versionMismatchException?: any;
}
