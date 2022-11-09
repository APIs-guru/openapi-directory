import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudWatchOutputConfig } from "./cloudwatchoutputconfig";
import { DocumentHashTypeEnum } from "./documenthashtypeenum";
import { NotificationConfig } from "./notificationconfig";


// MaintenanceWindowRunCommandParameters
/** 
 * <p>The parameters for a <code>RUN_COMMAND</code> task type.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For <code>RUN_COMMAND</code> tasks, Systems Manager uses specified values for <code>TaskParameters</code> and <code>LoggingInfo</code> only if no values are specified for <code>TaskInvocationParameters</code>. </p> </note>
**/
export class MaintenanceWindowRunCommandParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudWatchOutputConfig" })
  cloudWatchOutputConfig?: CloudWatchOutputConfig;

  @Metadata({ data: "json, name=Comment" })
  comment?: string;

  @Metadata({ data: "json, name=DocumentHash" })
  documentHash?: string;

  @Metadata({ data: "json, name=DocumentHashType" })
  documentHashType?: DocumentHashTypeEnum;

  @Metadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @Metadata({ data: "json, name=NotificationConfig" })
  notificationConfig?: NotificationConfig;

  @Metadata({ data: "json, name=OutputS3BucketName" })
  outputS3BucketName?: string;

  @Metadata({ data: "json, name=OutputS3KeyPrefix" })
  outputS3KeyPrefix?: string;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string[]>;

  @Metadata({ data: "json, name=ServiceRoleArn" })
  serviceRoleArn?: string;

  @Metadata({ data: "json, name=TimeoutSeconds" })
  timeoutSeconds?: number;
}
