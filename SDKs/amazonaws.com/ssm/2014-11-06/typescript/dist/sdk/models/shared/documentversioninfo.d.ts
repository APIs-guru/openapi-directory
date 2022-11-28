import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentFormatEnum } from "./documentformatenum";
import { ReviewStatusEnum } from "./reviewstatusenum";
import { DocumentStatusEnum } from "./documentstatusenum";
/**
 * Version information about the document.
**/
export declare class DocumentVersionInfo extends SpeakeasyBase {
    createdDate?: Date;
    displayName?: string;
    documentFormat?: DocumentFormatEnum;
    documentVersion?: string;
    isDefaultVersion?: boolean;
    name?: string;
    reviewStatus?: ReviewStatusEnum;
    status?: DocumentStatusEnum;
    statusInformation?: string;
    versionName?: string;
}
