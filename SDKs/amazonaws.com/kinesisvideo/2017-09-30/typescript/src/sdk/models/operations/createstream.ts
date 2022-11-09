import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateStreamHeaders extends SpeakeasyBase {
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


export class CreateStreamRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataRetentionInHours" })
  dataRetentionInHours?: number;

  @Metadata({ data: "json, name=DeviceName" })
  deviceName?: string;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=MediaType" })
  mediaType?: string;

  @Metadata({ data: "json, name=StreamName" })
  streamName: string;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}


export class CreateStreamRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateStreamHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateStreamRequestBody;
}


export class CreateStreamResponse extends SpeakeasyBase {
  @Metadata()
  accountStreamLimitExceededException?: any;

  @Metadata()
  clientLimitExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createStreamOutput?: shared.CreateStreamOutput;

  @Metadata()
  deviceStreamLimitExceededException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  invalidDeviceException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagsPerResourceExceededLimitException?: any;
}
