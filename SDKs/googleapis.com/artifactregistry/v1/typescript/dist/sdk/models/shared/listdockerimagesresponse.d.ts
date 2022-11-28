import { SpeakeasyBase } from "../../../internal/utils";
import { DockerImage } from "./dockerimage";
/**
 * The response from listing docker images.
**/
export declare class ListDockerImagesResponse extends SpeakeasyBase {
    dockerImages?: DockerImage[];
    nextPageToken?: string;
}
