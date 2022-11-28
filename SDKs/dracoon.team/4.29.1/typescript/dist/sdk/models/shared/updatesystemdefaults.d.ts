import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for updating system defaults
**/
export declare class UpdateSystemDefaults extends SpeakeasyBase {
    downloadShareDefaultExpirationPeriod?: number;
    fileDefaultExpirationPeriod?: number;
    languageDefault?: string;
    nonmemberViewerDefault?: boolean;
    uploadShareDefaultExpirationPeriod?: number;
}
