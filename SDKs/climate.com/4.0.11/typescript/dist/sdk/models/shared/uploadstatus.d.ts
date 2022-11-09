import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum UploadStatusStatusEnum {
    Uploading = "UPLOADING",
    Invalid = "INVALID",
    Pending = "PENDING",
    Inbox = "INBOX",
    Declined = "DECLINED",
    Importing = "IMPORTING",
    Success = "SUCCESS"
}
export declare class UploadStatus extends SpeakeasyBase {
    id: string;
    status: UploadStatusStatusEnum;
}
