import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails
/** 
 * A ulimit to set in the container.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HardLimit" })
  hardLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SoftLimit" })
  softLimit?: number;
}
