import { SpeakeasyBase } from "../../../internal/utils";
import { OpsItemIdentity } from "./opsitemidentity";
/**
 * Summary information about related-item resources for an OpsItem.
**/
export declare class OpsItemRelatedItemSummary extends SpeakeasyBase {
    associationId?: string;
    associationType?: string;
    createdBy?: OpsItemIdentity;
    createdTime?: Date;
    lastModifiedBy?: OpsItemIdentity;
    lastModifiedTime?: Date;
    opsItemId?: string;
    resourceType?: string;
    resourceUri?: string;
}
