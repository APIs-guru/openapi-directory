import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Archive Deployment information.
**/
export declare class GoogleCloudApigeeV1ArchiveDeploymentInput extends SpeakeasyBase {
    gcsUri?: string;
    labels?: Map<string, string>;
    name?: string;
}
/**
 * Archive Deployment information.
**/
export declare class GoogleCloudApigeeV1ArchiveDeployment extends SpeakeasyBase {
    createdAt?: string;
    gcsUri?: string;
    labels?: Map<string, string>;
    name?: string;
    operation?: string;
    updatedAt?: string;
}
