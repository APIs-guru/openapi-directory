import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AliasRoutingConfiguration } from "./aliasroutingconfiguration";



// AliasConfiguration
/** 
 * Provides configuration information about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>.
**/
export class AliasConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AliasArn" })
  aliasArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=FunctionVersion" })
  functionVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=RevisionId" })
  revisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=RoutingConfig" })
  routingConfig?: AliasRoutingConfiguration;
}
