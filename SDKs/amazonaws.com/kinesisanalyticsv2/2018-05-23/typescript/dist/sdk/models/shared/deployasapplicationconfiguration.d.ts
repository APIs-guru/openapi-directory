import { SpeakeasyBase } from "../../../internal/utils/utils";
import { S3ContentBaseLocation } from "./s3contentbaselocation";
/**
 * The information required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state..
**/
export declare class DeployAsApplicationConfiguration extends SpeakeasyBase {
    s3ContentLocation: S3ContentBaseLocation;
}
