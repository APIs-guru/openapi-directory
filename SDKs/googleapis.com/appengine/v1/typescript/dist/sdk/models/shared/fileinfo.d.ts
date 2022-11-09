import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Single source file that is part of the version to be deployed. Each source file that is deployed must be specified separately.
**/
export declare class FileInfo extends SpeakeasyBase {
    mimeType?: string;
    sha1Sum?: string;
    sourceUrl?: string;
}
