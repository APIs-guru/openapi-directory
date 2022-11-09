import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UploadStatusStatusEnum {
    Uploading = "UPLOADING"
,    Invalid = "INVALID"
,    Pending = "PENDING"
,    Inbox = "INBOX"
,    Declined = "DECLINED"
,    Importing = "IMPORTING"
,    Success = "SUCCESS"
}


export class UploadStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=status" })
  status: UploadStatusStatusEnum;
}
