import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UploadStatusStatusEnum {
    Uploading = "UPLOADING",
    Invalid = "INVALID",
    Pending = "PENDING",
    Inbox = "INBOX",
    Declined = "DECLINED",
    Importing = "IMPORTING",
    Success = "SUCCESS"
}


export class UploadStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: UploadStatusStatusEnum;
}
