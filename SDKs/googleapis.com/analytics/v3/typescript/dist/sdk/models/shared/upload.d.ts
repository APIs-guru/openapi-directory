import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metadata returned for an upload operation.
**/
export declare class Upload extends SpeakeasyBase {
    accountId?: string;
    customDataSourceId?: string;
    errors?: string[];
    id?: string;
    kind?: string;
    status?: string;
    uploadTime?: Date;
}
