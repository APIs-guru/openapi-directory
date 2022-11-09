import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HitAccessActionsEnum } from "./hitaccessactionsenum";
import { ComparatorEnum } from "./comparatorenum";
import { Locale } from "./locale";


// QualificationRequirement
/** 
 *  The QualificationRequirement data structure describes a Qualification that a Worker must have before the Worker is allowed to accept a HIT. A requirement may optionally state that a Worker must have the Qualification in order to preview the HIT, or see the HIT in search results. 
**/
export class QualificationRequirement extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActionsGuarded" })
  actionsGuarded?: HitAccessActionsEnum;

  @Metadata({ data: "json, name=Comparator" })
  comparator: ComparatorEnum;

  @Metadata({ data: "json, name=IntegerValues" })
  integerValues?: number[];

  @Metadata({ data: "json, name=LocaleValues", elemType: shared.Locale })
  localeValues?: Locale[];

  @Metadata({ data: "json, name=QualificationTypeId" })
  qualificationTypeId: string;

  @Metadata({ data: "json, name=RequiredToPreview" })
  requiredToPreview?: boolean;
}
