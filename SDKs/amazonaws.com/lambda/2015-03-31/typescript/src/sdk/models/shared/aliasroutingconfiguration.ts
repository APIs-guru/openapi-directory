import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AliasRoutingConfiguration
/** 
 * The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias.
**/
export class AliasRoutingConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdditionalVersionWeights" })
  additionalVersionWeights?: Map<string, number>;
}
