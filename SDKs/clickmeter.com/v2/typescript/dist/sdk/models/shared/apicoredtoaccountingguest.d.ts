import { SpeakeasyBase } from "../../../internal/utils";
import { ApiCoreDtoAccountingConversionOptions } from "./apicoredtoaccountingconversionoptions";
import { ApiCoreDtoGrantsGrant } from "./apicoredtograntsgrant";
import { ApiCoreDtoAccountingExtendedGrants } from "./apicoredtoaccountingextendedgrants";
import { ApiCoreDtoAccountingHitOptions } from "./apicoredtoaccountinghitoptions";
export declare enum ApiCoreDtoAccountingGuestTimeFormatEnum {
    AmPm = "AmPm",
    H24 = "H24"
}
export declare class ApiCoreDtoAccountingGuest extends SpeakeasyBase {
    apiKey?: string;
    conversionOptions?: ApiCoreDtoAccountingConversionOptions;
    creationDate?: string;
    currentGrant?: ApiCoreDtoGrantsGrant;
    dateFormat?: string;
    decimalSeparator?: string;
    email?: string;
    extendedGrants?: ApiCoreDtoAccountingExtendedGrants;
    groupGrants?: number;
    hitOptions?: ApiCoreDtoAccountingHitOptions;
    id?: number;
    key?: string;
    language?: string;
    loginCount?: number;
    name?: string;
    notes?: string;
    numberGroupSeparator?: string;
    password?: string;
    timeFormat?: ApiCoreDtoAccountingGuestTimeFormatEnum;
    timeZone?: number;
    timeframeMinDate?: string;
    timezonename?: string;
    tlGrants?: number;
    tpGrants?: number;
    userName?: string;
}
