import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LambdaConfiguration
/** 
 * Contains information about a Lambda configuration.
**/
export class LambdaConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=LambdaArn" })
  lambdaArn: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;
}
