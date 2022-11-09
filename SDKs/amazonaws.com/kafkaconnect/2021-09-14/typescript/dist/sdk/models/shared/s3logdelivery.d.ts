import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Details about delivering logs to Amazon S3.
**/
export declare class S3LogDelivery extends SpeakeasyBase {
    bucket?: string;
    enabled: boolean;
    prefix?: string;
}
