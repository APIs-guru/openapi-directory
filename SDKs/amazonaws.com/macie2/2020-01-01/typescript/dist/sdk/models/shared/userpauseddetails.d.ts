import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about when a classification job was paused. For a one-time job, this object also specifies when the job will expire and be cancelled if it isn't resumed. For a recurring job, this object also specifies when the paused job run will expire and be cancelled if it isn't resumed. This object is present only if a job's current status (jobStatus) is USER_PAUSED. The information in this object applies only to a job that was paused while it had a status of RUNNING.
**/
export declare class UserPausedDetails extends SpeakeasyBase {
    jobExpiresAt?: Date;
    jobImminentExpirationHealthEventArn?: string;
    jobPausedAt?: Date;
}
