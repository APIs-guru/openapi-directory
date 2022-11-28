import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HitAccessActionsEnum } from "./hitaccessactionsenum";
import { ComparatorEnum } from "./comparatorenum";
import { Locale } from "./locale";



// QualificationRequirement
/** 
 *  The QualificationRequirement data structure describes a Qualification that a Worker must have before the Worker is allowed to accept a HIT. A requirement may optionally state that a Worker must have the Qualification in order to preview the HIT, or see the HIT in search results. 
**/
export class QualificationRequirement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActionsGuarded" })
  actionsGuarded?: HitAccessActionsEnum;

  @SpeakeasyMetadata({ data: "json, name=Comparator" })
  comparator: ComparatorEnum;

  @SpeakeasyMetadata({ data: "json, name=IntegerValues" })
  integerValues?: number[];

  @SpeakeasyMetadata({ data: "json, name=LocaleValues", elemType: Locale })
  localeValues?: Locale[];

  @SpeakeasyMetadata({ data: "json, name=QualificationTypeId" })
  qualificationTypeId: string;

  @SpeakeasyMetadata({ data: "json, name=RequiredToPreview" })
  requiredToPreview?: boolean;
}
