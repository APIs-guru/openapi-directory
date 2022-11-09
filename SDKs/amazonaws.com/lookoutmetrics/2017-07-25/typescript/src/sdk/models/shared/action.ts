import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LambdaConfiguration } from "./lambdaconfiguration";
import { SnsConfiguration } from "./snsconfiguration";


// Action
/** 
 * A configuration that specifies the action to perform when anomalies are detected.
**/
export class Action extends SpeakeasyBase {
  @Metadata({ data: "json, name=LambdaConfiguration" })
  lambdaConfiguration?: LambdaConfiguration;

  @Metadata({ data: "json, name=SNSConfiguration" })
  snsConfiguration?: SnsConfiguration;
}
