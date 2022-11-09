import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails } from "./awsecstaskdefinitionvolumesefsvolumeconfigurationauthorizationconfigdetails";


// AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails
/** 
 * Information about the Amazon Elastic File System file system that is used for task storage.
**/
export class AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthorizationConfig" })
  authorizationConfig?: AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails;

  @Metadata({ data: "json, name=FilesystemId" })
  filesystemId?: string;

  @Metadata({ data: "json, name=RootDirectory" })
  rootDirectory?: string;

  @Metadata({ data: "json, name=TransitEncryption" })
  transitEncryption?: string;

  @Metadata({ data: "json, name=TransitEncryptionPort" })
  transitEncryptionPort?: number;
}
