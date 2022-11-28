import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchOutputConfig } from "./cloudwatchoutputconfig";
import { DocumentHashTypeEnum } from "./documenthashtypeenum";
import { NotificationConfig } from "./notificationconfig";
import { Target } from "./target";



export class SendCommandRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudWatchOutputConfig" })
  cloudWatchOutputConfig?: CloudWatchOutputConfig;

  @SpeakeasyMetadata({ data: "json, name=Comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=DocumentHash" })
  documentHash?: string;

  @SpeakeasyMetadata({ data: "json, name=DocumentHashType" })
  documentHashType?: DocumentHashTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=DocumentName" })
  documentName: string;

  @SpeakeasyMetadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceIds" })
  instanceIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=MaxConcurrency" })
  maxConcurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxErrors" })
  maxErrors?: string;

  @SpeakeasyMetadata({ data: "json, name=NotificationConfig" })
  notificationConfig?: NotificationConfig;

  @SpeakeasyMetadata({ data: "json, name=OutputS3BucketName" })
  outputS3BucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputS3KeyPrefix" })
  outputS3KeyPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputS3Region" })
  outputS3Region?: string;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=ServiceRoleArn" })
  serviceRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Targets", elemType: Target })
  targets?: Target[];

  @SpeakeasyMetadata({ data: "json, name=TimeoutSeconds" })
  timeoutSeconds?: number;
}
