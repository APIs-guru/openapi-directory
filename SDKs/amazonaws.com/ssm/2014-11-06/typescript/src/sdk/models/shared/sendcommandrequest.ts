import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CloudWatchOutputConfig } from "./cloudwatchoutputconfig";
import { DocumentHashTypeEnum } from "./documenthashtypeenum";
import { NotificationConfig } from "./notificationconfig";
import { Target } from "./target";


export class SendCommandRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudWatchOutputConfig" })
  cloudWatchOutputConfig?: CloudWatchOutputConfig;

  @Metadata({ data: "json, name=Comment" })
  comment?: string;

  @Metadata({ data: "json, name=DocumentHash" })
  documentHash?: string;

  @Metadata({ data: "json, name=DocumentHashType" })
  documentHashType?: DocumentHashTypeEnum;

  @Metadata({ data: "json, name=DocumentName" })
  documentName: string;

  @Metadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @Metadata({ data: "json, name=InstanceIds" })
  instanceIds?: string[];

  @Metadata({ data: "json, name=MaxConcurrency" })
  maxConcurrency?: string;

  @Metadata({ data: "json, name=MaxErrors" })
  maxErrors?: string;

  @Metadata({ data: "json, name=NotificationConfig" })
  notificationConfig?: NotificationConfig;

  @Metadata({ data: "json, name=OutputS3BucketName" })
  outputS3BucketName?: string;

  @Metadata({ data: "json, name=OutputS3KeyPrefix" })
  outputS3KeyPrefix?: string;

  @Metadata({ data: "json, name=OutputS3Region" })
  outputS3Region?: string;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string[]>;

  @Metadata({ data: "json, name=ServiceRoleArn" })
  serviceRoleArn?: string;

  @Metadata({ data: "json, name=Targets", elemType: shared.Target })
  targets?: Target[];

  @Metadata({ data: "json, name=TimeoutSeconds" })
  timeoutSeconds?: number;
}
