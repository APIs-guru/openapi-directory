import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Term } from "./term";

export enum SectionGradeEnum {
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

export enum SectionSubjectEnum {
    EnglishLanguageArts = "english/language arts"
,    Math = "math"
,    Science = "science"
,    SocialStudies = "social studies"
,    Language = "language"
,    HomeroomAdvisory = "homeroom/advisory"
,    InterventionsOnlineLearning = "interventions/online learning"
,    TechnologyAndEngineering = "technology and engineering"
,    PeAndHealth = "PE and health"
,    ArtsAndMusic = "arts and music"
,    Other = "other"
}


export class Section extends SpeakeasyBase {
  @Metadata({ data: "json, name=course_description" })
  courseDescription?: string;

  @Metadata({ data: "json, name=course_name" })
  courseName?: string;

  @Metadata({ data: "json, name=course_number" })
  courseNumber?: string;

  @Metadata({ data: "json, name=created" })
  created?: string;

  @Metadata({ data: "json, name=district" })
  district?: string;

  @Metadata({ data: "json, name=grade" })
  grade?: SectionGradeEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=last_modified" })
  lastModified?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=period" })
  period?: string;

  @Metadata({ data: "json, name=school" })
  school?: string;

  @Metadata({ data: "json, name=section_number" })
  sectionNumber?: string;

  @Metadata({ data: "json, name=sis_id" })
  sisId?: string;

  @Metadata({ data: "json, name=students" })
  students?: string[];

  @Metadata({ data: "json, name=subject" })
  subject?: SectionSubjectEnum;

  @Metadata({ data: "json, name=teacher" })
  teacher?: string;

  @Metadata({ data: "json, name=teachers" })
  teachers?: string[];

  @Metadata({ data: "json, name=term" })
  term?: Term;
}
