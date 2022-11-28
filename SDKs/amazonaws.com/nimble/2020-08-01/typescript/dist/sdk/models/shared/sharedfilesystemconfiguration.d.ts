import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration for a shared file storage system that is associated with a studio resource.
**/
export declare class SharedFileSystemConfiguration extends SpeakeasyBase {
    endpoint?: string;
    fileSystemId?: string;
    linuxMountPoint?: string;
    shareName?: string;
    windowsMountDrive?: string;
}
