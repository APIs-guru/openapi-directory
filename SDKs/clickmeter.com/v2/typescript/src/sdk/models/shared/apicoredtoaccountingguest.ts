import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiCoreDtoAccountingConversionOptions } from "./apicoredtoaccountingconversionoptions";
import { ApiCoreDtoGrantsGrant } from "./apicoredtograntsgrant";
import { ApiCoreDtoAccountingExtendedGrants } from "./apicoredtoaccountingextendedgrants";
import { ApiCoreDtoAccountingHitOptions } from "./apicoredtoaccountinghitoptions";

export enum ApiCoreDtoAccountingGuestTimeFormatEnum {
    AmPm = "AmPm"
,    H24 = "H24"
}


export class ApiCoreDtoAccountingGuest extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKey, form, name=apiKey;" })
  apiKey?: string;

  @Metadata({ data: "json, name=conversionOptions, form, name=conversionOptions;" })
  conversionOptions?: ApiCoreDtoAccountingConversionOptions;

  @Metadata({ data: "json, name=creationDate, form, name=creationDate;" })
  creationDate?: string;

  @Metadata({ data: "json, name=currentGrant, form, name=currentGrant;" })
  currentGrant?: ApiCoreDtoGrantsGrant;

  @Metadata({ data: "json, name=dateFormat, form, name=dateFormat;" })
  dateFormat?: string;

  @Metadata({ data: "json, name=decimalSeparator, form, name=decimalSeparator;" })
  decimalSeparator?: string;

  @Metadata({ data: "json, name=email, form, name=email;" })
  email?: string;

  @Metadata({ data: "json, name=extendedGrants, form, name=extendedGrants;" })
  extendedGrants?: ApiCoreDtoAccountingExtendedGrants;

  @Metadata({ data: "json, name=groupGrants, form, name=groupGrants;" })
  groupGrants?: number;

  @Metadata({ data: "json, name=hitOptions, form, name=hitOptions;" })
  hitOptions?: ApiCoreDtoAccountingHitOptions;

  @Metadata({ data: "json, name=id, form, name=id;" })
  id?: number;

  @Metadata({ data: "json, name=key, form, name=key;" })
  key?: string;

  @Metadata({ data: "json, name=language, form, name=language;" })
  language?: string;

  @Metadata({ data: "json, name=loginCount, form, name=loginCount;" })
  loginCount?: number;

  @Metadata({ data: "json, name=name, form, name=name;" })
  name?: string;

  @Metadata({ data: "json, name=notes, form, name=notes;" })
  notes?: string;

  @Metadata({ data: "json, name=numberGroupSeparator, form, name=numberGroupSeparator;" })
  numberGroupSeparator?: string;

  @Metadata({ data: "json, name=password, form, name=password;" })
  password?: string;

  @Metadata({ data: "json, name=timeFormat, form, name=timeFormat;" })
  timeFormat?: ApiCoreDtoAccountingGuestTimeFormatEnum;

  @Metadata({ data: "json, name=timeZone, form, name=timeZone;" })
  timeZone?: number;

  @Metadata({ data: "json, name=timeframeMinDate, form, name=timeframeMinDate;" })
  timeframeMinDate?: string;

  @Metadata({ data: "json, name=timezonename, form, name=timezonename;" })
  timezonename?: string;

  @Metadata({ data: "json, name=tlGrants, form, name=tlGrants;" })
  tlGrants?: number;

  @Metadata({ data: "json, name=tpGrants, form, name=tpGrants;" })
  tpGrants?: number;

  @Metadata({ data: "json, name=userName, form, name=userName;" })
  userName?: string;
}
