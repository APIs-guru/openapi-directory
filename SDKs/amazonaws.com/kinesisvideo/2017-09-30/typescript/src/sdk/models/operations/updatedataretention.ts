import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateDataRetentionHeaders extends SpeakeasyBase {
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

export enum UpdateDataRetentionRequestBodyOperationEnum {
    IncreaseDataRetention = "INCREASE_DATA_RETENTION"
,    DecreaseDataRetention = "DECREASE_DATA_RETENTION"
}


export class UpdateDataRetentionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=CurrentVersion" })
  currentVersion: string;

  @Metadata({ data: "json, name=DataRetentionChangeInHours" })
  dataRetentionChangeInHours: number;

  @Metadata({ data: "json, name=Operation" })
  operation: UpdateDataRetentionRequestBodyOperationEnum;

  @Metadata({ data: "json, name=StreamARN" })
  streamArn?: string;

  @Metadata({ data: "json, name=StreamName" })
  streamName?: string;
}


export class UpdateDataRetentionRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateDataRetentionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateDataRetentionRequestBody;
}


export class UpdateDataRetentionResponse extends SpeakeasyBase {
  @Metadata()
  clientLimitExceededException?: any;

  @Metadata()
  contentType: string;

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
  updateDataRetentionOutput?: Map<string, any>;

  @Metadata()
  versionMismatchException?: any;
}
