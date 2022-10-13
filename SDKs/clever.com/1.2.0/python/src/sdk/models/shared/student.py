from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import credentials
from . import location
from . import name

class StudentEllStatusEnum(str, Enum):
    Y = "Y"
    N = "N"
    UNKNOWN = ""

class StudentGenderEnum(str, Enum):
    M = "M"
    F = "F"
    UNKNOWN = ""

class StudentGradeEnum(str, Enum):
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

class StudentHispanicEthnicityEnum(str, Enum):
    Y = "Y"
    N = "N"
    UNKNOWN = ""

class StudentRaceEnum(str, Enum):
    CAUCASIAN = "Caucasian"
    ASIAN = "Asian"
    BLACK_OR_AFRICAN_AMERICAN = "Black or African American"
    AMERICAN_INDIAN = "American Indian"
    HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER = "Hawaiian or Other Pacific Islander"
    TWO_OR_MORE_RACES = "Two or More Races"
    UNKNOWN_MIXED = "Unknown"
    UNKNOWN_UPPER = ""


@dataclass_json
@dataclass
class Student:
    created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    credentials: Optional[credentials.Credentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credentials' }})
    district: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'district' }})
    dob: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dob' }})
    ell_status: Optional[StudentEllStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ell_status' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    gender: Optional[StudentGenderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gender' }})
    grade: Optional[StudentGradeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grade' }})
    graduation_year: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'graduation_year' }})
    hispanic_ethnicity: Optional[StudentHispanicEthnicityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hispanic_ethnicity' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_modified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_modified' }})
    location: Optional[location.Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: Optional[name.Name] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    race: Optional[StudentRaceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'race' }})
    school: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'school' }})
    schools: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schools' }})
    sis_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sis_id' }})
    state_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state_id' }})
    student_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'student_number' }})
    
