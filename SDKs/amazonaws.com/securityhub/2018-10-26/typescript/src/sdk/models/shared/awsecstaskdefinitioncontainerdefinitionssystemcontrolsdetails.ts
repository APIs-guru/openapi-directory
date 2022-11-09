import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails
/** 
 * A namespaced kernel parameter to set in the container.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Namespace" })
  namespace?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
