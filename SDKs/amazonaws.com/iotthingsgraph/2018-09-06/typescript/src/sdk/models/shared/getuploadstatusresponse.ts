import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UploadStatusEnum } from "./uploadstatusenum";



export class GetUploadStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate: Date;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: string[];

  @SpeakeasyMetadata({ data: "json, name=namespaceArn" })
  namespaceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=namespaceName" })
  namespaceName?: string;

  @SpeakeasyMetadata({ data: "json, name=namespaceVersion" })
  namespaceVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=uploadId" })
  uploadId: string;

  @SpeakeasyMetadata({ data: "json, name=uploadStatus" })
  uploadStatus: UploadStatusEnum;
}
