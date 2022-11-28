import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateDataRetentionHeaders extends SpeakeasyBase {
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

export enum UpdateDataRetentionRequestBodyOperationEnum {
    IncreaseDataRetention = "INCREASE_DATA_RETENTION",
    DecreaseDataRetention = "DECREASE_DATA_RETENTION"
}


export class UpdateDataRetentionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CurrentVersion" })
  currentVersion: string;

  @SpeakeasyMetadata({ data: "json, name=DataRetentionChangeInHours" })
  dataRetentionChangeInHours: number;

  @SpeakeasyMetadata({ data: "json, name=Operation" })
  operation: UpdateDataRetentionRequestBodyOperationEnum;

  @SpeakeasyMetadata({ data: "json, name=StreamARN" })
  streamArn?: string;

  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName?: string;
}


export class UpdateDataRetentionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateDataRetentionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateDataRetentionRequestBody;
}


export class UpdateDataRetentionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientLimitExceededException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidArgumentException?: any;

  @SpeakeasyMetadata()
  notAuthorizedException?: any;

  @SpeakeasyMetadata()
  resourceInUseException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateDataRetentionOutput?: Map<string, any>;

  @SpeakeasyMetadata()
  versionMismatchException?: any;
}
