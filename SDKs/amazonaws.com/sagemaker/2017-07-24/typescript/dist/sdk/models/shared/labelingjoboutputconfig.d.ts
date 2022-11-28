import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output configuration information for a labeling job.
**/
export declare class LabelingJobOutputConfig extends SpeakeasyBase {
    kmsKeyId?: string;
    s3OutputPath: string;
    snsTopicArn?: string;
}
