import { SpeakeasyBase } from "../../../internal/utils";
import { OpsItemNotification } from "./opsitemnotification";
import { OpsItemDataValue } from "./opsitemdatavalue";
import { RelatedOpsItem } from "./relatedopsitem";
import { Tag } from "./tag";
export declare class CreateOpsItemRequest extends SpeakeasyBase {
    actualEndTime?: Date;
    actualStartTime?: Date;
    category?: string;
    description: string;
    notifications?: OpsItemNotification[];
    operationalData?: Map<string, OpsItemDataValue>;
    opsItemType?: string;
    plannedEndTime?: Date;
    plannedStartTime?: Date;
    priority?: number;
    relatedOpsItems?: RelatedOpsItem[];
    severity?: string;
    source: string;
    tags?: Tag[];
    title: string;
}
