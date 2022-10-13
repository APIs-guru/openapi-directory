from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import term

class SectionGradeEnum(str, Enum):
    ONE = "1"
    TWO = "2"
    THREE = "3"
    FOUR = "4"
    FIVE = "5"
    SIX = "6"
    SEVEN = "7"
    EIGHT = "8"
    NINE = "9"
    TEN = "10"
    ELEVEN = "11"
    TWELVE = "12"
    PRE_KINDERGARTEN = "PreKindergarten"
    KINDERGARTEN = "Kindergarten"
    POST_GRADUATE = "PostGraduate"
    OTHER = "Other"

class SectionSubjectEnum(str, Enum):
    ENGLISH_LANGUAGE_ARTS = "english/language arts"
    MATH = "math"
    SCIENCE = "science"
    SOCIAL_STUDIES = "social studies"
    LANGUAGE = "language"
    HOMEROOM_ADVISORY = "homeroom/advisory"
    INTERVENTIONS_ONLINE_LEARNING = "interventions/online learning"
    TECHNOLOGY_AND_ENGINEERING = "technology and engineering"
    PE_AND_HEALTH = "PE and health"
    ARTS_AND_MUSIC = "arts and music"
    OTHER = "other"


@dataclass_json
@dataclass
class Section:
    course_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'course_description' }})
    course_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'course_name' }})
    course_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'course_number' }})
    created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    district: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'district' }})
    grade: Optional[SectionGradeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grade' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_modified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_modified' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'period' }})
    school: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'school' }})
    section_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'section_number' }})
    sis_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sis_id' }})
    students: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'students' }})
    subject: Optional[SectionSubjectEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subject' }})
    teacher: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teacher' }})
    teachers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teachers' }})
    term: Optional[term.Term] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'term' }})
    
