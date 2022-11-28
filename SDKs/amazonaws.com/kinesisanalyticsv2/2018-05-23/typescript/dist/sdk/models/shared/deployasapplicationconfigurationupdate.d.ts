import { SpeakeasyBase } from "../../../internal/utils";
import { S3ContentBaseLocationUpdate } from "./s3contentbaselocationupdate";
/**
 * Updates to the configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state..
**/
export declare class DeployAsApplicationConfigurationUpdate extends SpeakeasyBase {
    s3ContentLocationUpdate: S3ContentBaseLocationUpdate;
}
