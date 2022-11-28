import { SpeakeasyBase } from "../../../internal/utils";
import { AttachmentInformation } from "./attachmentinformation";
import { DocumentFormatEnum } from "./documentformatenum";
import { DocumentTypeEnum } from "./documenttypeenum";
import { DocumentHashTypeEnum } from "./documenthashtypeenum";
import { DocumentParameter } from "./documentparameter";
import { PlatformTypeEnum } from "./platformtypeenum";
import { DocumentRequires } from "./documentrequires";
import { ReviewInformation } from "./reviewinformation";
import { ReviewStatusEnum } from "./reviewstatusenum";
import { DocumentStatusEnum } from "./documentstatusenum";
import { Tag } from "./tag";
/**
 * Describes a Amazon Web Services Systems Manager document (SSM document).
**/
export declare class DocumentDescription extends SpeakeasyBase {
    approvedVersion?: string;
    attachmentsInformation?: AttachmentInformation[];
    author?: string;
    createdDate?: Date;
    defaultVersion?: string;
    description?: string;
    displayName?: string;
    documentFormat?: DocumentFormatEnum;
    documentType?: DocumentTypeEnum;
    documentVersion?: string;
    hash?: string;
    hashType?: DocumentHashTypeEnum;
    latestVersion?: string;
    name?: string;
    owner?: string;
    parameters?: DocumentParameter[];
    pendingReviewVersion?: string;
    platformTypes?: PlatformTypeEnum[];
    requires?: DocumentRequires[];
    reviewInformation?: ReviewInformation[];
    reviewStatus?: ReviewStatusEnum;
    schemaVersion?: string;
    sha1?: string;
    status?: DocumentStatusEnum;
    statusInformation?: string;
    tags?: Tag[];
    targetType?: string;
    versionName?: string;
}
