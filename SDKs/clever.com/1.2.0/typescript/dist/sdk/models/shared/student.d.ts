import { SpeakeasyBase } from "../../../internal/utils";
import { Credentials } from "./credentials";
import { Location } from "./location";
import { Name } from "./name";
export declare enum StudentEllStatusEnum {
    Y = "Y",
    N = "N",
    Unknown = ""
}
export declare enum StudentGenderEnum {
    M = "M",
    F = "F",
    Unknown = ""
}
export declare enum StudentGradeEnum {
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
export declare enum StudentHispanicEthnicityEnum {
    Y = "Y",
    N = "N",
    Unknown = ""
}
export declare enum StudentRaceEnum {
    Caucasian = "Caucasian",
    Asian = "Asian",
    BlackOrAfricanAmerican = "Black or African American",
    AmericanIndian = "American Indian",
    HawaiianOrOtherPacificIslander = "Hawaiian or Other Pacific Islander",
    TwoOrMoreRaces = "Two or More Races",
    UnknownMixed = "Unknown",
    UnknownUpper = ""
}
export declare class Student extends SpeakeasyBase {
    created?: string;
    credentials?: Credentials;
    district?: string;
    dob?: string;
    ellStatus?: StudentEllStatusEnum;
    email?: string;
    gender?: StudentGenderEnum;
    grade?: StudentGradeEnum;
    graduationYear?: string;
    hispanicEthnicity?: StudentHispanicEthnicityEnum;
    id?: string;
    lastModified?: string;
    location?: Location;
    name?: Name;
    race?: StudentRaceEnum;
    school?: string;
    schools?: string[];
    sisId?: string;
    stateId?: string;
    studentNumber?: string;
}
