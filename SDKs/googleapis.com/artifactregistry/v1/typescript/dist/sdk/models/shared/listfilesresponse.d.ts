import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleDevtoolsArtifactregistryV1File } from "./googledevtoolsartifactregistryv1file";
/**
 * The response from listing files.
**/
export declare class ListFilesResponse extends SpeakeasyBase {
    files?: GoogleDevtoolsArtifactregistryV1File[];
    nextPageToken?: string;
}
