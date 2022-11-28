import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MaintenanceWindowStepFunctionsParameters
/** 
 * <p>The parameters for a <code>STEP_FUNCTIONS</code> task.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For Step Functions tasks, Systems Manager ignores any values specified for <code>TaskParameters</code> and <code>LoggingInfo</code>.</p> </note>
**/
export class MaintenanceWindowStepFunctionsParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Input" })
  input?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
