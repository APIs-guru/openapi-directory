import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails } from "./awsecstaskdefinitionvolumesefsvolumeconfigurationauthorizationconfigdetails";



// AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails
/** 
 * Information about the Amazon Elastic File System file system that is used for task storage.
**/
export class AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthorizationConfig" })
  authorizationConfig?: AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails;

  @SpeakeasyMetadata({ data: "json, name=FilesystemId" })
  filesystemId?: string;

  @SpeakeasyMetadata({ data: "json, name=RootDirectory" })
  rootDirectory?: string;

  @SpeakeasyMetadata({ data: "json, name=TransitEncryption" })
  transitEncryption?: string;

  @SpeakeasyMetadata({ data: "json, name=TransitEncryptionPort" })
  transitEncryptionPort?: number;
}
