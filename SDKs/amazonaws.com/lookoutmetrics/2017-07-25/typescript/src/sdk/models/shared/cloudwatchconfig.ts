import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudWatchConfig
/** 
 * Details about an Amazon CloudWatch datasource.
**/
export class CloudWatchConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;
}
