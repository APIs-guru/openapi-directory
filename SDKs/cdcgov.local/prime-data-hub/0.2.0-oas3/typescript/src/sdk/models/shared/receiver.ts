import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SettingMetadata } from "./settingmetadata";
import { CustomConfiguration } from "./customconfiguration";
import { StandardHl7Configuration } from "./standardhl7configuration";

export enum ReceiverJurisdictionalFiltersMatchFieldsEnum {
    FacilityOrPatientAddress = "FACILITY_OR_PATIENT_ADDRESS"
,    FacilityAddress = "FACILITY_ADDRESS"
,    FacilityName = "FACILITY_NAME"
,    AbnormalValue = "ABNORMAL_VALUE"
}


// ReceiverJurisdictionalFilters
/** 
 * A single filter
**/
export class ReceiverJurisdictionalFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=doesNotMatch" })
  doesNotMatch?: boolean;

  @Metadata({ data: "json, name=matchFields" })
  matchFields?: ReceiverJurisdictionalFiltersMatchFieldsEnum;

  @Metadata({ data: "json, name=matchValues" })
  matchValues?: string[];
}

export enum ReceiverTimingFrequencyEnum {
    RealTime = "REAL_TIME"
,    Hourly = "HOURLY"
,    Daily = "DAILY"
}


// ReceiverTiming
/** 
 * When the report is sent if not immediately
**/
export class ReceiverTiming extends SpeakeasyBase {
  @Metadata({ data: "json, name=dailyAt" })
  dailyAt?: number;

  @Metadata({ data: "json, name=frequency" })
  frequency: ReceiverTimingFrequencyEnum;
}


// Receiver
/** 
 * A receiver of reports from the data hub
**/
export class Receiver extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=jurisdictionalFilters", elemType: shared.ReceiverJurisdictionalFilters })
  jurisdictionalFilters?: ReceiverJurisdictionalFilters[];

  @Metadata({ data: "json, name=meta" })
  meta?: SettingMetadata;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=organizationName" })
  organizationName?: string;

  @Metadata({ data: "json, name=timing" })
  timing: ReceiverTiming;

  @Metadata({ data: "json, name=topic" })
  topic: string;

  @Metadata({ data: "json, name=translations" })
  translations?: any[];
}
