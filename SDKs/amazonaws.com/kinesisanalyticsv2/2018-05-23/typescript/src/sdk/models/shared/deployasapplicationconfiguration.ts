import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3ContentBaseLocation } from "./s3contentbaselocation";



// DeployAsApplicationConfiguration
/** 
 * The information required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state..
**/
export class DeployAsApplicationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3ContentLocation" })
  s3ContentLocation: S3ContentBaseLocation;
}
