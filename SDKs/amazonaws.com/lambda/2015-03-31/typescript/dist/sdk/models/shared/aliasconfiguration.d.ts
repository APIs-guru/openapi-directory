import { SpeakeasyBase } from "../../../internal/utils";
import { AliasRoutingConfiguration } from "./aliasroutingconfiguration";
/**
 * Provides configuration information about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>.
**/
export declare class AliasConfiguration extends SpeakeasyBase {
    aliasArn?: string;
    description?: string;
    functionVersion?: string;
    name?: string;
    revisionId?: string;
    routingConfig?: AliasRoutingConfiguration;
}
