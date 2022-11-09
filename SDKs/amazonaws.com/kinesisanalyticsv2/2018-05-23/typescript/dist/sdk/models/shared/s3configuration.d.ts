import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * For a SQL-based Kinesis Data Analytics application, provides a description of an Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket and the name of the Amazon S3 object that contains the data.
**/
export declare class S3Configuration extends SpeakeasyBase {
    bucketArn: string;
    fileKey: string;
}
