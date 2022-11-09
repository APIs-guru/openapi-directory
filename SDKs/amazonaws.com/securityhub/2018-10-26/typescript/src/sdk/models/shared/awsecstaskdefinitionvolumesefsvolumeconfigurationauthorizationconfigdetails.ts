import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails
/** 
 * <p/>
**/
export class AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessPointId" })
  accessPointId?: string;

  @Metadata({ data: "json, name=Iam" })
  iam?: string;
}
