import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Credentials } from "./credentials";
import { Location } from "./location";
import { Name } from "./name";


export enum StudentEllStatusEnum {
    Y = "Y",
    N = "N",
    Unknown = ""
}

export enum StudentGenderEnum {
    M = "M",
    F = "F",
    Unknown = ""
}

export enum StudentGradeEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Eight = "8",
    Nine = "9",
    Ten = "10",
    Eleven = "11",
    Twelve = "12",
    PreKindergarten = "PreKindergarten",
    Kindergarten = "Kindergarten",
    PostGraduate = "PostGraduate",
    Other = "Other"
}

export enum StudentHispanicEthnicityEnum {
    Y = "Y",
    N = "N",
    Unknown = ""
}

export enum StudentRaceEnum {
    Caucasian = "Caucasian",
    Asian = "Asian",
    BlackOrAfricanAmerican = "Black or African American",
    AmericanIndian = "American Indian",
    HawaiianOrOtherPacificIslander = "Hawaiian or Other Pacific Islander",
    TwoOrMoreRaces = "Two or More Races",
    UnknownMixed = "Unknown",
    UnknownUpper = ""
}


export class Student extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: string;

  @SpeakeasyMetadata({ data: "json, name=credentials" })
  credentials?: Credentials;

  @SpeakeasyMetadata({ data: "json, name=district" })
  district?: string;

  @SpeakeasyMetadata({ data: "json, name=dob" })
  dob?: string;

  @SpeakeasyMetadata({ data: "json, name=ell_status" })
  ellStatus?: StudentEllStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: StudentGenderEnum;

  @SpeakeasyMetadata({ data: "json, name=grade" })
  grade?: StudentGradeEnum;

  @SpeakeasyMetadata({ data: "json, name=graduation_year" })
  graduationYear?: string;

  @SpeakeasyMetadata({ data: "json, name=hispanic_ethnicity" })
  hispanicEthnicity?: StudentHispanicEthnicityEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=last_modified" })
  lastModified?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: Location;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: Name;

  @SpeakeasyMetadata({ data: "json, name=race" })
  race?: StudentRaceEnum;

  @SpeakeasyMetadata({ data: "json, name=school" })
  school?: string;

  @SpeakeasyMetadata({ data: "json, name=schools" })
  schools?: string[];

  @SpeakeasyMetadata({ data: "json, name=sis_id" })
  sisId?: string;

  @SpeakeasyMetadata({ data: "json, name=state_id" })
  stateId?: string;

  @SpeakeasyMetadata({ data: "json, name=student_number" })
  studentNumber?: string;
}
