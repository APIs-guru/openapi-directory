import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3ContentBaseLocationUpdate } from "./s3contentbaselocationupdate";


// DeployAsApplicationConfigurationUpdate
/** 
 * Updates to the configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state..
**/
export class DeployAsApplicationConfigurationUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3ContentLocationUpdate" })
  s3ContentLocationUpdate: S3ContentBaseLocationUpdate;
}
