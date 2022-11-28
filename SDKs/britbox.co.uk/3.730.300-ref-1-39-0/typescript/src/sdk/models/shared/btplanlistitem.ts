import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BtPlanListItemIntervalEnum {
    Day = "day",
    Week = "week",
    Month = "month",
    Year = "year",
    None = "none"
}


export class BtPlanListItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=ctaText" })
  ctaText: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=ees07PlanDescription" })
  ees07PlanDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=ees07PlanTitle" })
  ees07PlanTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=ees07Title" })
  ees07Title?: string;

  @SpeakeasyMetadata({ data: "json, name=headerText" })
  headerText: string;

  @SpeakeasyMetadata({ data: "json, name=heroText" })
  heroText: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=interval" })
  interval?: BtPlanListItemIntervalEnum;

  @SpeakeasyMetadata({ data: "json, name=intervalCount" })
  intervalCount?: number;

  @SpeakeasyMetadata({ data: "json, name=longText" })
  longText: string;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname: string;

  @SpeakeasyMetadata({ data: "json, name=noThanksText" })
  noThanksText?: string;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product: string;

  @SpeakeasyMetadata({ data: "json, name=switchingText" })
  switchingText?: string;

  @SpeakeasyMetadata({ data: "json, name=termsAndConditionsItunes" })
  termsAndConditionsItunes?: string;

  @SpeakeasyMetadata({ data: "json, name=termsAndConditionsStripe" })
  termsAndConditionsStripe?: string;

  @SpeakeasyMetadata({ data: "json, name=trialPeriodDays" })
  trialPeriodDays: number;
}
