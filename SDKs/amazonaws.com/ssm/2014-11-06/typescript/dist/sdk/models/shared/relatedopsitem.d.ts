import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An OpsItems that shares something in common with the current OpsItem. For example, related OpsItems can include OpsItems with similar error messages, impacted resources, or statuses for the impacted resource.
**/
export declare class RelatedOpsItem extends SpeakeasyBase {
    opsItemId: string;
}
