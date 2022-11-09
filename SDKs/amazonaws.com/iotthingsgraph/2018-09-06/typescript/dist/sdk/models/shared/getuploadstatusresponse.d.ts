import { SpeakeasyBase } from "../../../internal/utils/utils";
import { UploadStatusEnum } from "./uploadstatusenum";
export declare class GetUploadStatusResponse extends SpeakeasyBase {
    createdDate: Date;
    failureReason?: string[];
    namespaceArn?: string;
    namespaceName?: string;
    namespaceVersion?: number;
    uploadId: string;
    uploadStatus: UploadStatusEnum;
}
