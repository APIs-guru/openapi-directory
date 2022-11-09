import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails
/** 
 * The FireLens configuration for the container. The configuration specifies and configures a log router for container logs.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Options" })
  options?: Map<string, string>;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
