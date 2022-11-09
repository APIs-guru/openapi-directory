import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails
/** 
 * A mount point for the data volumes in the container.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContainerPath" })
  containerPath?: string;

  @Metadata({ data: "json, name=ReadOnly" })
  readOnly?: boolean;

  @Metadata({ data: "json, name=SourceVolume" })
  sourceVolume?: string;
}
