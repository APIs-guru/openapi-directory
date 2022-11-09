import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Location } from "./location";
import { Principal } from "./principal";

export enum SchoolHighGradeEnum {
    One = "1"
,    Two = "2"
,    Three = "3"
,    Four = "4"
,    Five = "5"
,    Six = "6"
,    Seven = "7"
,    Eight = "8"
,    Nine = "9"
,    Ten = "10"
,    Eleven = "11"
,    Twelve = "12"
,    PreKindergarten = "PreKindergarten"
,    Kindergarten = "Kindergarten"
,    PostGraduate = "PostGraduate"
,    Other = "Other"
}

export enum SchoolLowGradeEnum {
    One = "1"
,    Two = "2"
,    Three = "3"
,    Four = "4"
,    Five = "5"
,    Six = "6"
,    Seven = "7"
,    Eight = "8"
,    Nine = "9"
,    Ten = "10"
,    Eleven = "11"
,    Twelve = "12"
,    PreKindergarten = "PreKindergarten"
,    Kindergarten = "Kindergarten"
,    PostGraduate = "PostGraduate"
,    Other = "Other"
}


export class School extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: string;

  @Metadata({ data: "json, name=district" })
  district?: string;

  @Metadata({ data: "json, name=high_grade" })
  highGrade?: SchoolHighGradeEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=last_modified" })
  lastModified?: string;

  @Metadata({ data: "json, name=location" })
  location?: Location;

  @Metadata({ data: "json, name=low_grade" })
  lowGrade?: SchoolLowGradeEnum;

  @Metadata({ data: "json, name=mdr_number" })
  mdrNumber?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nces_id" })
  ncesId?: string;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=principal" })
  principal?: Principal;

  @Metadata({ data: "json, name=school_number" })
  schoolNumber?: string;

  @Metadata({ data: "json, name=sis_id" })
  sisId?: string;

  @Metadata({ data: "json, name=state_id" })
  stateId?: string;
}
