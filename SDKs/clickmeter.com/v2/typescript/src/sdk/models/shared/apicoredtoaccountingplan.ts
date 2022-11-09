import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiCoreDtoAccountingPlan extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedPersonalDomains" })
  allowedPersonalDomains?: number;

  @Metadata({ data: "json, name=allowedPersonalUrls" })
  allowedPersonalUrls?: number;

  @Metadata({ data: "json, name=billingPeriodEnd" })
  billingPeriodEnd?: string;

  @Metadata({ data: "json, name=billingPeriodStart" })
  billingPeriodStart?: string;

  @Metadata({ data: "json, name=bonusMonthlyEvents" })
  bonusMonthlyEvents?: number;

  @Metadata({ data: "json, name=maximumDatapoints" })
  maximumDatapoints?: number;

  @Metadata({ data: "json, name=maximumGuests" })
  maximumGuests?: number;

  @Metadata({ data: "json, name=monthlyEvents" })
  monthlyEvents?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=price" })
  price?: number;

  @Metadata({ data: "json, name=profileId" })
  profileId?: number;

  @Metadata({ data: "json, name=recurring" })
  recurring?: boolean;

  @Metadata({ data: "json, name=recurringPeriod" })
  recurringPeriod?: number;

  @Metadata({ data: "json, name=usedDatapoints" })
  usedDatapoints?: number;

  @Metadata({ data: "json, name=usedMonthlyEvents" })
  usedMonthlyEvents?: number;
}
