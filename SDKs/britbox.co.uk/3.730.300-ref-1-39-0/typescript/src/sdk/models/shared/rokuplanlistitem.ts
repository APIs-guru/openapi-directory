import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RokuPlanListItemIntervalEnum {
    Day = "day"
,    Week = "week"
,    Month = "month"
,    Year = "year"
,    None = "none"
}


export class RokuPlanListItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: number;

  @Metadata({ data: "json, name=currency" })
  currency: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=interval" })
  interval: RokuPlanListItemIntervalEnum;

  @Metadata({ data: "json, name=intervalCount" })
  intervalCount: number;

  @Metadata({ data: "json, name=nickname" })
  nickname: string;

  @Metadata({ data: "json, name=product" })
  product: string;

  @Metadata({ data: "json, name=productCode" })
  productCode: string;

  @Metadata({ data: "json, name=savingLabel" })
  savingLabel: string;

  @Metadata({ data: "json, name=trialPeriodDays" })
  trialPeriodDays: number;
}
