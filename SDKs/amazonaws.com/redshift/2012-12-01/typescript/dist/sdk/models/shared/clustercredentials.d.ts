import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Temporary credentials with authorization to log on to an Amazon Redshift database.
**/
export declare class ClusterCredentials extends SpeakeasyBase {
    dbPassword?: string;
    dbUser?: string;
    expiration?: Date;
}
