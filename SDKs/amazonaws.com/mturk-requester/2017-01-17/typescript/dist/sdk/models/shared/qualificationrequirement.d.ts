import { SpeakeasyBase } from "../../../internal/utils";
import { HitAccessActionsEnum } from "./hitaccessactionsenum";
import { ComparatorEnum } from "./comparatorenum";
import { Locale } from "./locale";
/**
 *  The QualificationRequirement data structure describes a Qualification that a Worker must have before the Worker is allowed to accept a HIT. A requirement may optionally state that a Worker must have the Qualification in order to preview the HIT, or see the HIT in search results.
**/
export declare class QualificationRequirement extends SpeakeasyBase {
    actionsGuarded?: HitAccessActionsEnum;
    comparator: ComparatorEnum;
    integerValues?: number[];
    localeValues?: Locale[];
    qualificationTypeId: string;
    requiredToPreview?: boolean;
}
