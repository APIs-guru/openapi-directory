import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SettingMetadata } from "./settingmetadata";
import { CustomConfiguration } from "./customconfiguration";
import { StandardHl7Configuration } from "./standardhl7configuration";


export enum ReceiverJurisdictionalFiltersMatchFieldsEnum {
    FacilityOrPatientAddress = "FACILITY_OR_PATIENT_ADDRESS",
    FacilityAddress = "FACILITY_ADDRESS",
    FacilityName = "FACILITY_NAME",
    AbnormalValue = "ABNORMAL_VALUE"
}


// ReceiverJurisdictionalFilters
/** 
 * A single filter
**/
export class ReceiverJurisdictionalFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=doesNotMatch" })
  doesNotMatch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=matchFields" })
  matchFields?: ReceiverJurisdictionalFiltersMatchFieldsEnum;

  @SpeakeasyMetadata({ data: "json, name=matchValues" })
  matchValues?: string[];
}

export enum ReceiverTimingFrequencyEnum {
    RealTime = "REAL_TIME",
    Hourly = "HOURLY",
    Daily = "DAILY"
}


// ReceiverTiming
/** 
 * When the report is sent if not immediately
**/
export class ReceiverTiming extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dailyAt" })
  dailyAt?: number;

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency: ReceiverTimingFrequencyEnum;
}


// Receiver
/** 
 * A receiver of reports from the data hub
**/
export class Receiver extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=jurisdictionalFilters", elemType: ReceiverJurisdictionalFilters })
  jurisdictionalFilters?: ReceiverJurisdictionalFilters[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: SettingMetadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=organizationName" })
  organizationName?: string;

  @SpeakeasyMetadata({ data: "json, name=timing" })
  timing: ReceiverTiming;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic: string;

  @SpeakeasyMetadata({ data: "json, name=translations" })
  translations?: any[];
}


// ReceiverInput
/** 
 * A receiver of reports from the data hub
**/
export class ReceiverInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=jurisdictionalFilters", elemType: ReceiverJurisdictionalFilters })
  jurisdictionalFilters?: ReceiverJurisdictionalFilters[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=timing" })
  timing: ReceiverTiming;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic: string;

  @SpeakeasyMetadata({ data: "json, name=translations" })
  translations?: any[];
}
