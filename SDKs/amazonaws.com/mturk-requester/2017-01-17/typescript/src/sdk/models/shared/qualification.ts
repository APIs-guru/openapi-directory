import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Locale } from "./locale";
import { QualificationStatusEnum } from "./qualificationstatusenum";



// Qualification
/** 
 * The Qualification data structure represents a Qualification assigned to a user, including the Qualification type and the value (score).
**/
export class Qualification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GrantTime" })
  grantTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=IntegerValue" })
  integerValue?: number;

  @SpeakeasyMetadata({ data: "json, name=LocaleValue" })
  localeValue?: Locale;

  @SpeakeasyMetadata({ data: "json, name=QualificationTypeId" })
  qualificationTypeId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: QualificationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=WorkerId" })
  workerId?: string;
}
