import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScoutingTag } from "./scoutingtag";


export enum ScoutingObservationLocationDisplayColorEnum {
    Number307af7 = "#307af7",
    Number38d753 = "#38d753",
    NumberB037e4 = "#b037e4",
    NumberEf3e3e = "#ef3e3e",
    NumberF7ec41 = "#f7ec41",
    NumberFf8439 = "#ff8439",
    Number808080 = "#808080"
}

export enum ScoutingObservationStatusEnum {
    Active = "ACTIVE",
    Deleted = "DELETED"
}

export enum ScoutingObservationTimespanEnum {
    Permanent = "PERMANENT",
    Seasonal = "SEASONAL"
}


export class ScoutingObservation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime: Date;

  @SpeakeasyMetadata({ data: "json, name=fieldIds" })
  fieldIds: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location: any;

  @SpeakeasyMetadata({ data: "json, name=locationDisplayColor" })
  locationDisplayColor: ScoutingObservationLocationDisplayColorEnum;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: ScoutingObservationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: ScoutingTag })
  tags: ScoutingTag[];

  @SpeakeasyMetadata({ data: "json, name=timespan" })
  timespan: ScoutingObservationTimespanEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt: Date;
}
