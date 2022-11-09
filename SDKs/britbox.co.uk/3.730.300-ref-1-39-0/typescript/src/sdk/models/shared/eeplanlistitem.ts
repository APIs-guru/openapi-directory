import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EePlanListItemIntervalEnum {
    Day = "day"
,    Week = "week"
,    Month = "month"
,    Year = "year"
,    None = "none"
}


export class EePlanListItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=ctaText" })
  ctaText: string;

  @Metadata({ data: "json, name=currency" })
  currency: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=headerText" })
  headerText: string;

  @Metadata({ data: "json, name=heroText" })
  heroText: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=interval" })
  interval?: EePlanListItemIntervalEnum;

  @Metadata({ data: "json, name=intervalCount" })
  intervalCount?: number;

  @Metadata({ data: "json, name=longText" })
  longText: string;

  @Metadata({ data: "json, name=nickname" })
  nickname: string;

  @Metadata({ data: "json, name=product" })
  product: string;

  @Metadata({ data: "json, name=trialPeriodDays" })
  trialPeriodDays: number;
}
