import { SpeakeasyBase } from "../../../internal/utils";
import { AttachmentContent } from "./attachmentcontent";
import { DocumentFormatEnum } from "./documentformatenum";
import { DocumentTypeEnum } from "./documenttypeenum";
import { DocumentRequires } from "./documentrequires";
import { ReviewStatusEnum } from "./reviewstatusenum";
import { DocumentStatusEnum } from "./documentstatusenum";
export declare class GetDocumentResult extends SpeakeasyBase {
    attachmentsContent?: AttachmentContent[];
    content?: string;
    createdDate?: Date;
    displayName?: string;
    documentFormat?: DocumentFormatEnum;
    documentType?: DocumentTypeEnum;
    documentVersion?: string;
    name?: string;
    requires?: DocumentRequires[];
    reviewStatus?: ReviewStatusEnum;
    status?: DocumentStatusEnum;
    statusInformation?: string;
    versionName?: string;
}
