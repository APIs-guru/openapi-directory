import { SpeakeasyBase } from "../../../internal/utils";
import { AttachmentsSourceKeyEnum } from "./attachmentssourcekeyenum";
/**
 * Identifying information about a document attachment, including the file name and a key-value pair that identifies the location of an attachment to a document.
**/
export declare class AttachmentsSource extends SpeakeasyBase {
    key?: AttachmentsSourceKeyEnum;
    name?: string;
    values?: string[];
}
