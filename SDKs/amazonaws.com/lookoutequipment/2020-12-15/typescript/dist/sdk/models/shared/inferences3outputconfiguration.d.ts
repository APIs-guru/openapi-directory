import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 *  Specifies configuration information for the output results from the inference, including output S3 location.
**/
export declare class InferenceS3OutputConfiguration extends SpeakeasyBase {
    bucket: string;
    prefix?: string;
}
