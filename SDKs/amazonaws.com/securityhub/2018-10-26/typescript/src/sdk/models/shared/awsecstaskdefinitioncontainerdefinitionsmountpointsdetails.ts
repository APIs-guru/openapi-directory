import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails
/** 
 * A mount point for the data volumes in the container.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContainerPath" })
  containerPath?: string;

  @SpeakeasyMetadata({ data: "json, name=ReadOnly" })
  readOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SourceVolume" })
  sourceVolume?: string;
}
