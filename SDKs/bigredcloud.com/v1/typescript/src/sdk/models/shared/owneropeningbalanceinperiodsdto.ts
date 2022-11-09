import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OwnerOpeningBalanceInPeriodsDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentMonth" })
  currentMonth?: number;

  @Metadata({ data: "json, name=oneMonthOld" })
  oneMonthOld?: number;

  @Metadata({ data: "json, name=threeMonthsOld" })
  threeMonthsOld?: number;

  @Metadata({ data: "json, name=twoMonthsOld" })
  twoMonthsOld?: number;
}
