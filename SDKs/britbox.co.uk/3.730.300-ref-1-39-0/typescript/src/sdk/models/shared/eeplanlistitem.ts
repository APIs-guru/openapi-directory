import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EePlanListItemIntervalEnum {
    Day = "day",
    Week = "week",
    Month = "month",
    Year = "year",
    None = "none"
}


export class EePlanListItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=ctaText" })
  ctaText: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=headerText" })
  headerText: string;

  @SpeakeasyMetadata({ data: "json, name=heroText" })
  heroText: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=interval" })
  interval?: EePlanListItemIntervalEnum;

  @SpeakeasyMetadata({ data: "json, name=intervalCount" })
  intervalCount?: number;

  @SpeakeasyMetadata({ data: "json, name=longText" })
  longText: string;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname: string;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product: string;

  @SpeakeasyMetadata({ data: "json, name=trialPeriodDays" })
  trialPeriodDays: number;
}
