import { SpeakeasyBase } from "../../../internal/utils";
import { S3Location } from "./s3location";
/**
 * A script that runs on first launch of an Amazon EC2 instance. Used for configuring the server during launch.
**/
export declare class UserData extends SpeakeasyBase {
    s3Location?: S3Location;
}
