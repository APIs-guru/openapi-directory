import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AliasRoutingConfiguration } from "./aliasroutingconfiguration";


// AliasConfiguration
/** 
 * Provides configuration information about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>.
**/
export class AliasConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=AliasArn" })
  aliasArn?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=FunctionVersion" })
  functionVersion?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=RevisionId" })
  revisionId?: string;

  @Metadata({ data: "json, name=RoutingConfig" })
  routingConfig?: AliasRoutingConfiguration;
}
