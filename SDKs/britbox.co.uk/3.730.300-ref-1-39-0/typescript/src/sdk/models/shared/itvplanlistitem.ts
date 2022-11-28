import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ItvPlanListItemIntervalEnum {
    Day = "day",
    Week = "week",
    Month = "month",
    Year = "year",
    None = "none"
}


export class ItvPlanListItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=interval" })
  interval: ItvPlanListItemIntervalEnum;

  @SpeakeasyMetadata({ data: "json, name=intervalCount" })
  intervalCount: number;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname: string;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product: string;

  @SpeakeasyMetadata({ data: "json, name=savingLabel" })
  savingLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=switchingText" })
  switchingText?: string;

  @SpeakeasyMetadata({ data: "json, name=trialPeriodDays" })
  trialPeriodDays?: number;
}
