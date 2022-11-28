import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type is used by the files array, which shows the name, ID, file type, and upload date for each provided evidential file.
**/
export declare class FileInfo extends SpeakeasyBase {
    fileId?: string;
    fileType?: string;
    name?: string;
    uploadedDate?: string;
}
