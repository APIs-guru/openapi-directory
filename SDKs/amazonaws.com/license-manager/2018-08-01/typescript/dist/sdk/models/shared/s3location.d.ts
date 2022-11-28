import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details of the S3 bucket that report generator reports are published to.
**/
export declare class S3Location extends SpeakeasyBase {
    bucket?: string;
    keyPrefix?: string;
}
