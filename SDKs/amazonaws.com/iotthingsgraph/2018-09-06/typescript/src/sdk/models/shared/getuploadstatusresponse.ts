import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UploadStatusEnum } from "./uploadstatusenum";


export class GetUploadStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdDate" })
  createdDate: Date;

  @Metadata({ data: "json, name=failureReason" })
  failureReason?: string[];

  @Metadata({ data: "json, name=namespaceArn" })
  namespaceArn?: string;

  @Metadata({ data: "json, name=namespaceName" })
  namespaceName?: string;

  @Metadata({ data: "json, name=namespaceVersion" })
  namespaceVersion?: number;

  @Metadata({ data: "json, name=uploadId" })
  uploadId: string;

  @Metadata({ data: "json, name=uploadStatus" })
  uploadStatus: UploadStatusEnum;
}
