import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ScoutingTag } from "./scoutingtag";

export enum ScoutingObservationLocationDisplayColorEnum {
    Number307af7 = "#307af7"
,    Number38d753 = "#38d753"
,    NumberB037e4 = "#b037e4"
,    NumberEf3e3e = "#ef3e3e"
,    NumberF7ec41 = "#f7ec41"
,    NumberFf8439 = "#ff8439"
,    Number808080 = "#808080"
}

export enum ScoutingObservationStatusEnum {
    Active = "ACTIVE"
,    Deleted = "DELETED"
}

export enum ScoutingObservationTimespanEnum {
    Permanent = "PERMANENT"
,    Seasonal = "SEASONAL"
}


export class ScoutingObservation extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime: Date;

  @Metadata({ data: "json, name=fieldIds" })
  fieldIds: string[];

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=location" })
  location: any;

  @Metadata({ data: "json, name=locationDisplayColor" })
  locationDisplayColor: ScoutingObservationLocationDisplayColorEnum;

  @Metadata({ data: "json, name=note" })
  note: string;

  @Metadata({ data: "json, name=startTime" })
  startTime: Date;

  @Metadata({ data: "json, name=status" })
  status: ScoutingObservationStatusEnum;

  @Metadata({ data: "json, name=tags", elemType: shared.ScoutingTag })
  tags: ScoutingTag[];

  @Metadata({ data: "json, name=timespan" })
  timespan: ScoutingObservationTimespanEnum;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt: Date;
}
