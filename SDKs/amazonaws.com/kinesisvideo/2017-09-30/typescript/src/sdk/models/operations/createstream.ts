import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateStreamHeaders extends SpeakeasyBase {
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


export class CreateStreamRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataRetentionInHours" })
  dataRetentionInHours?: number;

  @SpeakeasyMetadata({ data: "json, name=DeviceName" })
  deviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=MediaType" })
  mediaType?: string;

  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}


export class CreateStreamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateStreamHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateStreamRequestBody;
}


export class CreateStreamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accountStreamLimitExceededException?: any;

  @SpeakeasyMetadata()
  clientLimitExceededException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createStreamOutput?: shared.CreateStreamOutput;

  @SpeakeasyMetadata()
  deviceStreamLimitExceededException?: any;

  @SpeakeasyMetadata()
  invalidArgumentException?: any;

  @SpeakeasyMetadata()
  invalidDeviceException?: any;

  @SpeakeasyMetadata()
  resourceInUseException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tagsPerResourceExceededLimitException?: any;
}
