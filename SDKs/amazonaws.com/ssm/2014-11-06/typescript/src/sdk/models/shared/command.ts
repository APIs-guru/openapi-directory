import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchOutputConfig } from "./cloudwatchoutputconfig";
import { NotificationConfig } from "./notificationconfig";
import { CommandStatusEnum } from "./commandstatusenum";
import { Target } from "./target";



// Command
/** 
 * Describes a command request.
**/
export class Command extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudWatchOutputConfig" })
  cloudWatchOutputConfig?: CloudWatchOutputConfig;

  @SpeakeasyMetadata({ data: "json, name=CommandId" })
  commandId?: string;

  @SpeakeasyMetadata({ data: "json, name=Comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=CompletedCount" })
  completedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=DeliveryTimedOutCount" })
  deliveryTimedOutCount?: number;

  @SpeakeasyMetadata({ data: "json, name=DocumentName" })
  documentName?: string;

  @SpeakeasyMetadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorCount" })
  errorCount?: number;

  @SpeakeasyMetadata({ data: "json, name=ExpiresAfter" })
  expiresAfter?: Date;

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

  @SpeakeasyMetadata({ data: "json, name=RequestedDateTime" })
  requestedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ServiceRole" })
  serviceRole?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: CommandStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusDetails" })
  statusDetails?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetCount" })
  targetCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Targets", elemType: Target })
  targets?: Target[];

  @SpeakeasyMetadata({ data: "json, name=TimeoutSeconds" })
  timeoutSeconds?: number;
}
