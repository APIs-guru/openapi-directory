import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails
/** 
 * A ulimit to set in the container.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=HardLimit" })
  hardLimit?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SoftLimit" })
  softLimit?: number;
}
