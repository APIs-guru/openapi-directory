import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LambdaConfiguration
/** 
 * Contains information about a Lambda configuration.
**/
export class LambdaConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LambdaArn" })
  lambdaArn: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;
}
