import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentFormatEnum } from "./documentformatenum";
import { DocumentTypeEnum } from "./documenttypeenum";
import { PlatformTypeEnum } from "./platformtypeenum";
import { DocumentRequires } from "./documentrequires";
import { ReviewStatusEnum } from "./reviewstatusenum";
import { Tag } from "./tag";
/**
 * Describes the name of a SSM document.
**/
export declare class DocumentIdentifier extends SpeakeasyBase {
    author?: string;
    createdDate?: Date;
    displayName?: string;
    documentFormat?: DocumentFormatEnum;
    documentType?: DocumentTypeEnum;
    documentVersion?: string;
    name?: string;
    owner?: string;
    platformTypes?: PlatformTypeEnum[];
    requires?: DocumentRequires[];
    reviewStatus?: ReviewStatusEnum;
    schemaVersion?: string;
    tags?: Tag[];
    targetType?: string;
    versionName?: string;
}
