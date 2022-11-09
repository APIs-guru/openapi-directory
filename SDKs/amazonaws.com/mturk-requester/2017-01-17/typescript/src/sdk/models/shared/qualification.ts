import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Locale } from "./locale";
import { QualificationStatusEnum } from "./qualificationstatusenum";


// Qualification
/** 
 * The Qualification data structure represents a Qualification assigned to a user, including the Qualification type and the value (score).
**/
export class Qualification extends SpeakeasyBase {
  @Metadata({ data: "json, name=GrantTime" })
  grantTime?: Date;

  @Metadata({ data: "json, name=IntegerValue" })
  integerValue?: number;

  @Metadata({ data: "json, name=LocaleValue" })
  localeValue?: Locale;

  @Metadata({ data: "json, name=QualificationTypeId" })
  qualificationTypeId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: QualificationStatusEnum;

  @Metadata({ data: "json, name=WorkerId" })
  workerId?: string;
}
