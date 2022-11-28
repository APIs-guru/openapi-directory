import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias.
**/
export declare class AliasRoutingConfiguration extends SpeakeasyBase {
    additionalVersionWeights?: Map<string, number>;
}
