import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsArtifactregistryV1beta2File } from "./googledevtoolsartifactregistryv1beta2file";
/**
 * The response from listing files.
**/
export declare class ListFilesResponse extends SpeakeasyBase {
    files?: GoogleDevtoolsArtifactregistryV1beta2File[];
    nextPageToken?: string;
}
