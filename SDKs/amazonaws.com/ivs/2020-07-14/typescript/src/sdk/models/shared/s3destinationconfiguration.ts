import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3DestinationConfiguration
/** 
 * A complex type that describes an S3 location where recorded videos will be stored.
**/
export class S3DestinationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketName" })
  bucketName: string;
}
