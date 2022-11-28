import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
import { Principal } from "./principal";
export declare enum SchoolHighGradeEnum {
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
export declare enum SchoolLowGradeEnum {
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
export declare class School extends SpeakeasyBase {
    created?: string;
    district?: string;
    highGrade?: SchoolHighGradeEnum;
    id?: string;
    lastModified?: string;
    location?: Location;
    lowGrade?: SchoolLowGradeEnum;
    mdrNumber?: string;
    name?: string;
    ncesId?: string;
    phone?: string;
    principal?: Principal;
    schoolNumber?: string;
    sisId?: string;
    stateId?: string;
}
