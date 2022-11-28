import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails
/** 
 * A namespaced kernel parameter to set in the container.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Namespace" })
  namespace?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
