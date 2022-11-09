import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Location } from "./s3location";


// UserData
/** 
 * A script that runs on first launch of an Amazon EC2 instance. Used for configuring the server during launch.
**/
export class UserData extends SpeakeasyBase {
  @Metadata({ data: "json, name=s3Location" })
  s3Location?: S3Location;
}
