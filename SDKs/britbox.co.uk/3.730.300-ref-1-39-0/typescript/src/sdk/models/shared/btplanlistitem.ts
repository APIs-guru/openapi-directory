import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BtPlanListItemIntervalEnum {
    Day = "day"
,    Week = "week"
,    Month = "month"
,    Year = "year"
,    None = "none"
}


export class BtPlanListItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=ctaText" })
  ctaText: string;

  @Metadata({ data: "json, name=currency" })
  currency: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=ees07PlanDescription" })
  ees07PlanDescription?: string;

  @Metadata({ data: "json, name=ees07PlanTitle" })
  ees07PlanTitle?: string;

  @Metadata({ data: "json, name=ees07Title" })
  ees07Title?: string;

  @Metadata({ data: "json, name=headerText" })
  headerText: string;

  @Metadata({ data: "json, name=heroText" })
  heroText: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=interval" })
  interval?: BtPlanListItemIntervalEnum;

  @Metadata({ data: "json, name=intervalCount" })
  intervalCount?: number;

  @Metadata({ data: "json, name=longText" })
  longText: string;

  @Metadata({ data: "json, name=nickname" })
  nickname: string;

  @Metadata({ data: "json, name=noThanksText" })
  noThanksText?: string;

  @Metadata({ data: "json, name=product" })
  product: string;

  @Metadata({ data: "json, name=switchingText" })
  switchingText?: string;

  @Metadata({ data: "json, name=termsAndConditionsItunes" })
  termsAndConditionsItunes?: string;

  @Metadata({ data: "json, name=termsAndConditionsStripe" })
  termsAndConditionsStripe?: string;

  @Metadata({ data: "json, name=trialPeriodDays" })
  trialPeriodDays: number;
}
