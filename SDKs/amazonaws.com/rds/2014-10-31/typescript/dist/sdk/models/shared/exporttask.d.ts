import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Contains the details of a snapshot export to Amazon S3. </p> <p>This data type is used as a response element in the <code>DescribeExportTasks</code> action. </p>
**/
export declare class ExportTask extends SpeakeasyBase {
    exportOnly?: string[];
    exportTaskIdentifier?: string;
    failureCause?: string;
    iamRoleArn?: string;
    kmsKeyId?: string;
    percentProgress?: number;
    s3Bucket?: string;
    s3Prefix?: string;
    snapshotTime?: Date;
    sourceArn?: string;
    status?: string;
    taskEndTime?: Date;
    taskStartTime?: Date;
    totalExtractedDataInGb?: number;
    warningMessage?: string;
}
