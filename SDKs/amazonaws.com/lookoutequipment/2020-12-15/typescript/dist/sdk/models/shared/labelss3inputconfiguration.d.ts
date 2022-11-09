import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The location information (prefix and bucket name) for the s3 location being used for label data.
**/
export declare class LabelsS3InputConfiguration extends SpeakeasyBase {
    bucket: string;
    prefix?: string;
}
