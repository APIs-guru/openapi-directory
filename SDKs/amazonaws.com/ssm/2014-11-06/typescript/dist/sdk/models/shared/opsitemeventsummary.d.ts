import { SpeakeasyBase } from "../../../internal/utils";
import { OpsItemIdentity } from "./opsitemidentity";
/**
 * Summary information about an OpsItem event or that associated an OpsItem with a related item.
**/
export declare class OpsItemEventSummary extends SpeakeasyBase {
    createdBy?: OpsItemIdentity;
    createdTime?: Date;
    detail?: string;
    detailType?: string;
    eventId?: string;
    opsItemId?: string;
    source?: string;
}
