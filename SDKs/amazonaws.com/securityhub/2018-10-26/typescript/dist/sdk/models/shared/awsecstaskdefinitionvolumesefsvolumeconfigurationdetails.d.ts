import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails } from "./awsecstaskdefinitionvolumesefsvolumeconfigurationauthorizationconfigdetails";
/**
 * Information about the Amazon Elastic File System file system that is used for task storage.
**/
export declare class AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails extends SpeakeasyBase {
    authorizationConfig?: AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails;
    filesystemId?: string;
    rootDirectory?: string;
    transitEncryption?: string;
    transitEncryptionPort?: number;
}
