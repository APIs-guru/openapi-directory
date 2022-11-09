import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ScoutingTag } from "./scoutingtag";
export declare enum ScoutingObservationLocationDisplayColorEnum {
    Number307af7 = "#307af7",
    Number38d753 = "#38d753",
    NumberB037e4 = "#b037e4",
    NumberEf3e3e = "#ef3e3e",
    NumberF7ec41 = "#f7ec41",
    NumberFf8439 = "#ff8439",
    Number808080 = "#808080"
}
export declare enum ScoutingObservationStatusEnum {
    Active = "ACTIVE",
    Deleted = "DELETED"
}
export declare enum ScoutingObservationTimespanEnum {
    Permanent = "PERMANENT",
    Seasonal = "SEASONAL"
}
export declare class ScoutingObservation extends SpeakeasyBase {
    endTime: Date;
    fieldIds: string[];
    id: string;
    location: any;
    locationDisplayColor: ScoutingObservationLocationDisplayColorEnum;
    note: string;
    startTime: Date;
    status: ScoutingObservationStatusEnum;
    tags: ScoutingTag[];
    timespan: ScoutingObservationTimespanEnum;
    title: string;
    updatedAt: Date;
}
