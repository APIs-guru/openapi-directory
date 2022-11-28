import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails
/** 
 * <p/>
**/
export class AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessPointId" })
  accessPointId?: string;

  @SpeakeasyMetadata({ data: "json, name=Iam" })
  iam?: string;
}
