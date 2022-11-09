import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails
/** 
 * A data volume to mount from another container.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReadOnly" })
  readOnly?: boolean;

  @Metadata({ data: "json, name=SourceContainer" })
  sourceContainer?: string;
}
