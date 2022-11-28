import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails
/** 
 * A resource to assign to a container.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
