import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LambdaConfiguration } from "./lambdaconfiguration";
import { SnsConfiguration } from "./snsconfiguration";
/**
 * A configuration that specifies the action to perform when anomalies are detected.
**/
export declare class Action extends SpeakeasyBase {
    lambdaConfiguration?: LambdaConfiguration;
    snsConfiguration?: SnsConfiguration;
}
