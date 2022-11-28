import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails
/** 
 * The FireLens configuration for the container. The configuration specifies and configures a log router for container logs.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Options" })
  options?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
