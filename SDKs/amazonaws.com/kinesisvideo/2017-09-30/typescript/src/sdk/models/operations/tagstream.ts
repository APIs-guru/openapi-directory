import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TagStreamHeaders extends SpeakeasyBase {
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


export class TagStreamRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=StreamARN" })
  streamArn?: string;

  @Metadata({ data: "json, name=StreamName" })
  streamName?: string;

  @Metadata({ data: "json, name=Tags" })
  tags: Map<string, string>;
}


export class TagStreamRequest extends SpeakeasyBase {
  @Metadata()
  headers: TagStreamHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: TagStreamRequestBody;
}


export class TagStreamResponse extends SpeakeasyBase {
  @Metadata()
  clientLimitExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  invalidResourceFormatException?: any;

  @Metadata()
  notAuthorizedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagStreamOutput?: Map<string, any>;

  @Metadata()
  tagsPerResourceExceededLimitException?: any;
}
