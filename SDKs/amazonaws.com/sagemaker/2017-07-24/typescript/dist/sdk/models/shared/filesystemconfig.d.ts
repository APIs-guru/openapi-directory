import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Amazon Elastic File System (EFS) storage configuration for a SageMaker image.
**/
export declare class FileSystemConfig extends SpeakeasyBase {
    defaultGid?: number;
    defaultUid?: number;
    mountPath?: string;
}
