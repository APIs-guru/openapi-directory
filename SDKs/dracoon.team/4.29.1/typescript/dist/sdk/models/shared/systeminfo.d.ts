import { SpeakeasyBase } from "../../../internal/utils";
import { AuthMethod } from "./authmethod";
/**
 * System information (default language and authentication methods)
**/
export declare class SystemInfo extends SpeakeasyBase {
    authMethods: AuthMethod[];
    hideLoginInputFields: boolean;
    languageDefault: string;
    s3EnforceDirectUpload: boolean;
    s3Hosts: string[];
    useS3Storage: boolean;
}
