import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails
/** 
 * The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Add" })
  add?: string[];

  @Metadata({ data: "json, name=Drop" })
  drop?: string[];
}
