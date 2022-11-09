import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 *  Specifies configuration information for the input data for the inference, including input data S3 location.
**/
export declare class InferenceS3InputConfiguration extends SpeakeasyBase {
    bucket: string;
    prefix?: string;
}
