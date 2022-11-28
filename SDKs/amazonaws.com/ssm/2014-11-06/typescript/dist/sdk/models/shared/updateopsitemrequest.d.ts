import { SpeakeasyBase } from "../../../internal/utils";
import { OpsItemNotification } from "./opsitemnotification";
import { OpsItemDataValue } from "./opsitemdatavalue";
import { RelatedOpsItem } from "./relatedopsitem";
import { OpsItemStatusEnum } from "./opsitemstatusenum";
export declare class UpdateOpsItemRequest extends SpeakeasyBase {
    actualEndTime?: Date;
    actualStartTime?: Date;
    category?: string;
    description?: string;
    notifications?: OpsItemNotification[];
    operationalData?: Map<string, OpsItemDataValue>;
    operationalDataToDelete?: string[];
    opsItemId: string;
    plannedEndTime?: Date;
    plannedStartTime?: Date;
    priority?: number;
    relatedOpsItems?: RelatedOpsItem[];
    severity?: string;
    status?: OpsItemStatusEnum;
    title?: string;
}
