import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a Docker volume.
**/
export declare class AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails extends SpeakeasyBase {
    autoprovision?: boolean;
    driver?: string;
    driverOpts?: Map<string, string>;
    labels?: Map<string, string>;
    scope?: string;
}
