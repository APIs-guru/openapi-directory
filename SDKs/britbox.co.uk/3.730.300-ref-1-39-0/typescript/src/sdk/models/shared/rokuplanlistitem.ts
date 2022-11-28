import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RokuPlanListItemIntervalEnum {
    Day = "day",
    Week = "week",
    Month = "month",
    Year = "year",
    None = "none"
}


export class RokuPlanListItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=interval" })
  interval: RokuPlanListItemIntervalEnum;

  @SpeakeasyMetadata({ data: "json, name=intervalCount" })
  intervalCount: number;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname: string;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product: string;

  @SpeakeasyMetadata({ data: "json, name=productCode" })
  productCode: string;

  @SpeakeasyMetadata({ data: "json, name=savingLabel" })
  savingLabel: string;

  @SpeakeasyMetadata({ data: "json, name=trialPeriodDays" })
  trialPeriodDays: number;
}
