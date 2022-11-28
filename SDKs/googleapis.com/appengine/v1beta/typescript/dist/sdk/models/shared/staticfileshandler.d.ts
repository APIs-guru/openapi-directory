import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Files served directly to the user for a given URL, such as images, CSS stylesheets, or JavaScript source files. Static file handlers describe which files in the application directory are static files, and which URLs serve them.
**/
export declare class StaticFilesHandler extends SpeakeasyBase {
    applicationReadable?: boolean;
    expiration?: string;
    httpHeaders?: Map<string, string>;
    mimeType?: string;
    path?: string;
    requireMatchingFile?: boolean;
    uploadPathRegex?: string;
}
