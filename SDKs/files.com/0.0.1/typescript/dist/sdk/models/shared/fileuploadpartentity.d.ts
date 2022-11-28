import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Begin file upload
**/
export declare class FileUploadPartEntity extends SpeakeasyBase {
    action?: string;
    askAboutOverwrites?: boolean;
    availableParts?: number;
    expires?: string;
    headers?: Map<string, any>;
    httpMethod?: string;
    nextPartsize?: number;
    parallelParts?: boolean;
    parameters?: Map<string, any>;
    partNumber?: number;
    partsize?: number;
    path?: string;
    ref?: string;
    send?: Map<string, any>;
    uploadUri?: string;
}
