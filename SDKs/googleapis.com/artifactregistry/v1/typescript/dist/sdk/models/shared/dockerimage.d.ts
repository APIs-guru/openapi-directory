import { SpeakeasyBase } from "../../../internal/utils";
/**
 * DockerImage represents a docker artifact. The following fields are returned as untyped metadata in the Version resource, using camelcase keys (i.e. metadata.imageSizeBytes): * imageSizeBytes * mediaType * buildTime
**/
export declare class DockerImage extends SpeakeasyBase {
    buildTime?: string;
    imageSizeBytes?: string;
    mediaType?: string;
    name?: string;
    tags?: string[];
    updateTime?: string;
    uploadTime?: string;
    uri?: string;
}
