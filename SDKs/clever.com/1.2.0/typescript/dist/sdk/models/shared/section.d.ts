import { SpeakeasyBase } from "../../../internal/utils";
import { Term } from "./term";
export declare enum SectionGradeEnum {
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
export declare enum SectionSubjectEnum {
    EnglishLanguageArts = "english/language arts",
    Math = "math",
    Science = "science",
    SocialStudies = "social studies",
    Language = "language",
    HomeroomAdvisory = "homeroom/advisory",
    InterventionsOnlineLearning = "interventions/online learning",
    TechnologyAndEngineering = "technology and engineering",
    PeAndHealth = "PE and health",
    ArtsAndMusic = "arts and music",
    Other = "other"
}
export declare class Section extends SpeakeasyBase {
    courseDescription?: string;
    courseName?: string;
    courseNumber?: string;
    created?: string;
    district?: string;
    grade?: SectionGradeEnum;
    id?: string;
    lastModified?: string;
    name?: string;
    period?: string;
    school?: string;
    sectionNumber?: string;
    sisId?: string;
    students?: string[];
    subject?: SectionSubjectEnum;
    teacher?: string;
    teachers?: string[];
    term?: Term;
}
