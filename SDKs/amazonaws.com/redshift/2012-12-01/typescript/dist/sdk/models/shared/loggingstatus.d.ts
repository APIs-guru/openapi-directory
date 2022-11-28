import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the status of logging for a cluster.
**/
export declare class LoggingStatus extends SpeakeasyBase {
    bucketName?: string;
    lastFailureMessage?: string;
    lastFailureTime?: Date;
    lastSuccessfulDeliveryTime?: Date;
    loggingEnabled?: boolean;
    s3KeyPrefix?: string;
}
