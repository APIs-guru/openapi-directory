import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Credentials } from "./credentials";
import { Location } from "./location";
import { Name } from "./name";

export enum StudentEllStatusEnum {
    Y = "Y"
,    N = "N"
,    Unknown = ""
}

export enum StudentGenderEnum {
    M = "M"
,    F = "F"
,    Unknown = ""
}

export enum StudentGradeEnum {
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

export enum StudentHispanicEthnicityEnum {
    Y = "Y"
,    N = "N"
,    Unknown = ""
}

export enum StudentRaceEnum {
    Caucasian = "Caucasian"
,    Asian = "Asian"
,    BlackOrAfricanAmerican = "Black or African American"
,    AmericanIndian = "American Indian"
,    HawaiianOrOtherPacificIslander = "Hawaiian or Other Pacific Islander"
,    TwoOrMoreRaces = "Two or More Races"
,    UnknownMixed = "Unknown"
,    UnknownUpper = ""
}


export class Student extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: string;

  @Metadata({ data: "json, name=credentials" })
  credentials?: Credentials;

  @Metadata({ data: "json, name=district" })
  district?: string;

  @Metadata({ data: "json, name=dob" })
  dob?: string;

  @Metadata({ data: "json, name=ell_status" })
  ellStatus?: StudentEllStatusEnum;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=gender" })
  gender?: StudentGenderEnum;

  @Metadata({ data: "json, name=grade" })
  grade?: StudentGradeEnum;

  @Metadata({ data: "json, name=graduation_year" })
  graduationYear?: string;

  @Metadata({ data: "json, name=hispanic_ethnicity" })
  hispanicEthnicity?: StudentHispanicEthnicityEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=last_modified" })
  lastModified?: string;

  @Metadata({ data: "json, name=location" })
  location?: Location;

  @Metadata({ data: "json, name=name" })
  name?: Name;

  @Metadata({ data: "json, name=race" })
  race?: StudentRaceEnum;

  @Metadata({ data: "json, name=school" })
  school?: string;

  @Metadata({ data: "json, name=schools" })
  schools?: string[];

  @Metadata({ data: "json, name=sis_id" })
  sisId?: string;

  @Metadata({ data: "json, name=state_id" })
  stateId?: string;

  @Metadata({ data: "json, name=student_number" })
  studentNumber?: string;
}
