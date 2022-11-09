import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails
/** 
 * A resource to assign to a container.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Type" })
  type?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
