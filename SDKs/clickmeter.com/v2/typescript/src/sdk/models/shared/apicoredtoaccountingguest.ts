import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiCoreDtoAccountingConversionOptions } from "./apicoredtoaccountingconversionoptions";
import { ApiCoreDtoGrantsGrant } from "./apicoredtograntsgrant";
import { ApiCoreDtoAccountingExtendedGrants } from "./apicoredtoaccountingextendedgrants";
import { ApiCoreDtoAccountingHitOptions } from "./apicoredtoaccountinghitoptions";


export enum ApiCoreDtoAccountingGuestTimeFormatEnum {
    AmPm = "AmPm",
    H24 = "H24"
}


export class ApiCoreDtoAccountingGuest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKey, form, name=apiKey;" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "json, name=conversionOptions, form, name=conversionOptions;" })
  conversionOptions?: ApiCoreDtoAccountingConversionOptions;

  @SpeakeasyMetadata({ data: "json, name=creationDate, form, name=creationDate;" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=currentGrant, form, name=currentGrant;" })
  currentGrant?: ApiCoreDtoGrantsGrant;

  @SpeakeasyMetadata({ data: "json, name=dateFormat, form, name=dateFormat;" })
  dateFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=decimalSeparator, form, name=decimalSeparator;" })
  decimalSeparator?: string;

  @SpeakeasyMetadata({ data: "json, name=email, form, name=email;" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=extendedGrants, form, name=extendedGrants;" })
  extendedGrants?: ApiCoreDtoAccountingExtendedGrants;

  @SpeakeasyMetadata({ data: "json, name=groupGrants, form, name=groupGrants;" })
  groupGrants?: number;

  @SpeakeasyMetadata({ data: "json, name=hitOptions, form, name=hitOptions;" })
  hitOptions?: ApiCoreDtoAccountingHitOptions;

  @SpeakeasyMetadata({ data: "json, name=id, form, name=id;" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=key, form, name=key;" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=language, form, name=language;" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=loginCount, form, name=loginCount;" })
  loginCount?: number;

  @SpeakeasyMetadata({ data: "json, name=name, form, name=name;" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes, form, name=notes;" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=numberGroupSeparator, form, name=numberGroupSeparator;" })
  numberGroupSeparator?: string;

  @SpeakeasyMetadata({ data: "json, name=password, form, name=password;" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=timeFormat, form, name=timeFormat;" })
  timeFormat?: ApiCoreDtoAccountingGuestTimeFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=timeZone, form, name=timeZone;" })
  timeZone?: number;

  @SpeakeasyMetadata({ data: "json, name=timeframeMinDate, form, name=timeframeMinDate;" })
  timeframeMinDate?: string;

  @SpeakeasyMetadata({ data: "json, name=timezonename, form, name=timezonename;" })
  timezonename?: string;

  @SpeakeasyMetadata({ data: "json, name=tlGrants, form, name=tlGrants;" })
  tlGrants?: number;

  @SpeakeasyMetadata({ data: "json, name=tpGrants, form, name=tpGrants;" })
  tpGrants?: number;

  @SpeakeasyMetadata({ data: "json, name=userName, form, name=userName;" })
  userName?: string;
}
