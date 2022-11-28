import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The description of the details about delivering logs to Amazon S3.
**/
export declare class S3LogDeliveryDescription extends SpeakeasyBase {
    bucket?: string;
    enabled?: boolean;
    prefix?: string;
}
