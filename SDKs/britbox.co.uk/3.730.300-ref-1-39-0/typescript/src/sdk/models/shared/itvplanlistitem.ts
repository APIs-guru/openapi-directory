import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ItvPlanListItemIntervalEnum {
    Day = "day"
,    Week = "week"
,    Month = "month"
,    Year = "year"
,    None = "none"
}


export class ItvPlanListItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: number;

  @Metadata({ data: "json, name=currency" })
  currency: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=interval" })
  interval: ItvPlanListItemIntervalEnum;

  @Metadata({ data: "json, name=intervalCount" })
  intervalCount: number;

  @Metadata({ data: "json, name=nickname" })
  nickname: string;

  @Metadata({ data: "json, name=product" })
  product: string;

  @Metadata({ data: "json, name=savingLabel" })
  savingLabel?: string;

  @Metadata({ data: "json, name=switchingText" })
  switchingText?: string;

  @Metadata({ data: "json, name=trialPeriodDays" })
  trialPeriodDays?: number;
}
