import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails
/** 
 * A data volume to mount from another container.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReadOnly" })
  readOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SourceContainer" })
  sourceContainer?: string;
}
