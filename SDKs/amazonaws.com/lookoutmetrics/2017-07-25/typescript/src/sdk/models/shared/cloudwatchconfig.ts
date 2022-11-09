import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudWatchConfig
/** 
 * Details about an Amazon CloudWatch datasource.
**/
export class CloudWatchConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;
}
