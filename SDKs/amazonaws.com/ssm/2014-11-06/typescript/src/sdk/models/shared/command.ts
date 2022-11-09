import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CloudWatchOutputConfig } from "./cloudwatchoutputconfig";
import { NotificationConfig } from "./notificationconfig";
import { CommandStatusEnum } from "./commandstatusenum";
import { Target } from "./target";


// Command
/** 
 * Describes a command request.
**/
export class Command extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudWatchOutputConfig" })
  cloudWatchOutputConfig?: CloudWatchOutputConfig;

  @Metadata({ data: "json, name=CommandId" })
  commandId?: string;

  @Metadata({ data: "json, name=Comment" })
  comment?: string;

  @Metadata({ data: "json, name=CompletedCount" })
  completedCount?: number;

  @Metadata({ data: "json, name=DeliveryTimedOutCount" })
  deliveryTimedOutCount?: number;

  @Metadata({ data: "json, name=DocumentName" })
  documentName?: string;

  @Metadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @Metadata({ data: "json, name=ErrorCount" })
  errorCount?: number;

  @Metadata({ data: "json, name=ExpiresAfter" })
  expiresAfter?: Date;

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

  @Metadata({ data: "json, name=RequestedDateTime" })
  requestedDateTime?: Date;

  @Metadata({ data: "json, name=ServiceRole" })
  serviceRole?: string;

  @Metadata({ data: "json, name=Status" })
  status?: CommandStatusEnum;

  @Metadata({ data: "json, name=StatusDetails" })
  statusDetails?: string;

  @Metadata({ data: "json, name=TargetCount" })
  targetCount?: number;

  @Metadata({ data: "json, name=Targets", elemType: shared.Target })
  targets?: Target[];

  @Metadata({ data: "json, name=TimeoutSeconds" })
  timeoutSeconds?: number;
}
