import { SpeakeasyBase } from "../../../internal/utils";
import { SettingMetadata } from "./settingmetadata";
export declare enum ReceiverJurisdictionalFiltersMatchFieldsEnum {
    FacilityOrPatientAddress = "FACILITY_OR_PATIENT_ADDRESS",
    FacilityAddress = "FACILITY_ADDRESS",
    FacilityName = "FACILITY_NAME",
    AbnormalValue = "ABNORMAL_VALUE"
}
/**
 * A single filter
**/
export declare class ReceiverJurisdictionalFilters extends SpeakeasyBase {
    doesNotMatch?: boolean;
    matchFields?: ReceiverJurisdictionalFiltersMatchFieldsEnum;
    matchValues?: string[];
}
export declare enum ReceiverTimingFrequencyEnum {
    RealTime = "REAL_TIME",
    Hourly = "HOURLY",
    Daily = "DAILY"
}
/**
 * When the report is sent if not immediately
**/
export declare class ReceiverTiming extends SpeakeasyBase {
    dailyAt?: number;
    frequency: ReceiverTimingFrequencyEnum;
}
/**
 * A receiver of reports from the data hub
**/
export declare class Receiver extends SpeakeasyBase {
    description: string;
    jurisdictionalFilters?: ReceiverJurisdictionalFilters[];
    meta?: SettingMetadata;
    name: string;
    organizationName?: string;
    timing: ReceiverTiming;
    topic: string;
    translations?: any[];
}
/**
 * A receiver of reports from the data hub
**/
export declare class ReceiverInput extends SpeakeasyBase {
    description: string;
    jurisdictionalFilters?: ReceiverJurisdictionalFilters[];
    name: string;
    timing: ReceiverTiming;
    topic: string;
    translations?: any[];
}
