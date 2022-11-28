import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3ContentBaseLocationDescription } from "./s3contentbaselocationdescription";



// DeployAsApplicationConfigurationDescription
/** 
 * The configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state.
**/
export class DeployAsApplicationConfigurationDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3ContentLocationDescription" })
  s3ContentLocationDescription: S3ContentBaseLocationDescription;
}
