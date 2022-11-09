import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3ContentBaseLocation } from "./s3contentbaselocation";


// DeployAsApplicationConfiguration
/** 
 * The information required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state..
**/
export class DeployAsApplicationConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3ContentLocation" })
  s3ContentLocation: S3ContentBaseLocation;
}
