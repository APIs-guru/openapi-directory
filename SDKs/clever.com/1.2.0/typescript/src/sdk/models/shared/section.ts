import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Term } from "./term";


export enum SectionGradeEnum {
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

export enum SectionSubjectEnum {
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


export class Section extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=course_description" })
  courseDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=course_name" })
  courseName?: string;

  @SpeakeasyMetadata({ data: "json, name=course_number" })
  courseNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: string;

  @SpeakeasyMetadata({ data: "json, name=district" })
  district?: string;

  @SpeakeasyMetadata({ data: "json, name=grade" })
  grade?: SectionGradeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=last_modified" })
  lastModified?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: string;

  @SpeakeasyMetadata({ data: "json, name=school" })
  school?: string;

  @SpeakeasyMetadata({ data: "json, name=section_number" })
  sectionNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=sis_id" })
  sisId?: string;

  @SpeakeasyMetadata({ data: "json, name=students" })
  students?: string[];

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: SectionSubjectEnum;

  @SpeakeasyMetadata({ data: "json, name=teacher" })
  teacher?: string;

  @SpeakeasyMetadata({ data: "json, name=teachers" })
  teachers?: string[];

  @SpeakeasyMetadata({ data: "json, name=term" })
  term?: Term;
}
