import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails
/** 
 * The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Add" })
  add?: string[];

  @SpeakeasyMetadata({ data: "json, name=Drop" })
  drop?: string[];
}
