import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3DestinationConfiguration
/** 
 * A complex type that describes an S3 location where recorded videos will be stored.
**/
export class S3DestinationConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketName" })
  bucketName: string;
}
