import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiCoreDtoAccountingPlan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedPersonalDomains" })
  allowedPersonalDomains?: number;

  @SpeakeasyMetadata({ data: "json, name=allowedPersonalUrls" })
  allowedPersonalUrls?: number;

  @SpeakeasyMetadata({ data: "json, name=billingPeriodEnd" })
  billingPeriodEnd?: string;

  @SpeakeasyMetadata({ data: "json, name=billingPeriodStart" })
  billingPeriodStart?: string;

  @SpeakeasyMetadata({ data: "json, name=bonusMonthlyEvents" })
  bonusMonthlyEvents?: number;

  @SpeakeasyMetadata({ data: "json, name=maximumDatapoints" })
  maximumDatapoints?: number;

  @SpeakeasyMetadata({ data: "json, name=maximumGuests" })
  maximumGuests?: number;

  @SpeakeasyMetadata({ data: "json, name=monthlyEvents" })
  monthlyEvents?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=profileId" })
  profileId?: number;

  @SpeakeasyMetadata({ data: "json, name=recurring" })
  recurring?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recurringPeriod" })
  recurringPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=usedDatapoints" })
  usedDatapoints?: number;

  @SpeakeasyMetadata({ data: "json, name=usedMonthlyEvents" })
  usedMonthlyEvents?: number;
}
