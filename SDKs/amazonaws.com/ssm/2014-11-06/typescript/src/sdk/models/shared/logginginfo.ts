import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LoggingInfo
/** 
 * <p>Information about an Amazon Simple Storage Service (Amazon S3) bucket to write instance-level logs to.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note>
**/
export class LoggingInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3BucketName" })
  s3BucketName: string;

  @SpeakeasyMetadata({ data: "json, name=S3KeyPrefix" })
  s3KeyPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=S3Region" })
  s3Region: string;
}
