import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3DestinationConfiguration } from "./s3destinationconfiguration";


// DestinationConfiguration
/** 
 * A complex type that describes a location where recorded videos will be stored. Each member represents a type of destination configuration. For recording, you define one and only one type of destination configuration.
**/
export class DestinationConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=s3" })
  s3?: S3DestinationConfiguration;
}
