import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OwnerOpeningBalanceInPeriodsDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentMonth" })
  currentMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=oneMonthOld" })
  oneMonthOld?: number;

  @SpeakeasyMetadata({ data: "json, name=threeMonthsOld" })
  threeMonthsOld?: number;

  @SpeakeasyMetadata({ data: "json, name=twoMonthsOld" })
  twoMonthsOld?: number;
}
