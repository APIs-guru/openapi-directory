import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LambdaConfiguration } from "./lambdaconfiguration";
import { SnsConfiguration } from "./snsconfiguration";



// Action
/** 
 * A configuration that specifies the action to perform when anomalies are detected.
**/
export class Action extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LambdaConfiguration" })
  lambdaConfiguration?: LambdaConfiguration;

  @SpeakeasyMetadata({ data: "json, name=SNSConfiguration" })
  snsConfiguration?: SnsConfiguration;
}
