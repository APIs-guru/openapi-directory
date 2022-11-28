import { SpeakeasyBase } from "../../../internal/utils";
export declare class ApiCoreDtoAccountingPlan extends SpeakeasyBase {
    allowedPersonalDomains?: number;
    allowedPersonalUrls?: number;
    billingPeriodEnd?: string;
    billingPeriodStart?: string;
    bonusMonthlyEvents?: number;
    maximumDatapoints?: number;
    maximumGuests?: number;
    monthlyEvents?: number;
    name?: string;
    price?: number;
    profileId?: number;
    recurring?: boolean;
    recurringPeriod?: number;
    usedDatapoints?: number;
    usedMonthlyEvents?: number;
}
