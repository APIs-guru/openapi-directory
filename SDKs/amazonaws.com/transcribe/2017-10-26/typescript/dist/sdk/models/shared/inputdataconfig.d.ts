import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The object that contains the Amazon S3 object location and access role required to train and tune your custom language model.
**/
export declare class InputDataConfig extends SpeakeasyBase {
    dataAccessRoleArn: string;
    s3Uri: string;
    tuningDataS3Uri?: string;
}
