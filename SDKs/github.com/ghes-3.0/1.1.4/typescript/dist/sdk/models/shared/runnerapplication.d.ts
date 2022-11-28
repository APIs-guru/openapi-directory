import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Runner Application
**/
export declare class RunnerApplication extends SpeakeasyBase {
    architecture: string;
    downloadUrl: string;
    filename: string;
    os: string;
    sha256Checksum?: string;
    tempDownloadToken?: string;
}
