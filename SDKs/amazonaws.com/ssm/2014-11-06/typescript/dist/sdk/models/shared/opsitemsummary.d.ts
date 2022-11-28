import { SpeakeasyBase } from "../../../internal/utils";
import { OpsItemDataValue } from "./opsitemdatavalue";
import { OpsItemStatusEnum } from "./opsitemstatusenum";
/**
 * A count of OpsItems.
**/
export declare class OpsItemSummary extends SpeakeasyBase {
    actualEndTime?: Date;
    actualStartTime?: Date;
    category?: string;
    createdBy?: string;
    createdTime?: Date;
    lastModifiedBy?: string;
    lastModifiedTime?: Date;
    operationalData?: Map<string, OpsItemDataValue>;
    opsItemId?: string;
    opsItemType?: string;
    plannedEndTime?: Date;
    plannedStartTime?: Date;
    priority?: number;
    severity?: string;
    source?: string;
    status?: OpsItemStatusEnum;
    title?: string;
}
