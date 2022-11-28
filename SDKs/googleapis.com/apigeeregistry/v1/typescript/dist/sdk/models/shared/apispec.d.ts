import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a version of an API in a structured way. ApiSpecs provide formal descriptions that consumers can use to use a version. ApiSpec resources are intended to be fully-resolved descriptions of an ApiVersion. When specs consist of multiple files, these should be bundled together (e.g., in a zip archive) and stored as a unit. Multiple specs can exist to provide representations in different API description formats. Synchronization of these representations would be provided by tooling and background services.
**/
export declare class ApiSpecInput extends SpeakeasyBase {
    annotations?: Map<string, string>;
    contents?: string;
    description?: string;
    filename?: string;
    labels?: Map<string, string>;
    mimeType?: string;
    name?: string;
    sourceUri?: string;
}
/**
 * Describes a version of an API in a structured way. ApiSpecs provide formal descriptions that consumers can use to use a version. ApiSpec resources are intended to be fully-resolved descriptions of an ApiVersion. When specs consist of multiple files, these should be bundled together (e.g., in a zip archive) and stored as a unit. Multiple specs can exist to provide representations in different API description formats. Synchronization of these representations would be provided by tooling and background services.
**/
export declare class ApiSpec extends SpeakeasyBase {
    annotations?: Map<string, string>;
    contents?: string;
    createTime?: string;
    description?: string;
    filename?: string;
    hash?: string;
    labels?: Map<string, string>;
    mimeType?: string;
    name?: string;
    revisionCreateTime?: string;
    revisionId?: string;
    revisionUpdateTime?: string;
    sizeBytes?: number;
    sourceUri?: string;
}
