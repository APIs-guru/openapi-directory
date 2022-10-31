package shared

type SectionGradeEnum string

const (
	SectionGradeEnumOne             SectionGradeEnum = "1"
	SectionGradeEnumTwo             SectionGradeEnum = "2"
	SectionGradeEnumThree           SectionGradeEnum = "3"
	SectionGradeEnumFour            SectionGradeEnum = "4"
	SectionGradeEnumFive            SectionGradeEnum = "5"
	SectionGradeEnumSix             SectionGradeEnum = "6"
	SectionGradeEnumSeven           SectionGradeEnum = "7"
	SectionGradeEnumEight           SectionGradeEnum = "8"
	SectionGradeEnumNine            SectionGradeEnum = "9"
	SectionGradeEnumTen             SectionGradeEnum = "10"
	SectionGradeEnumEleven          SectionGradeEnum = "11"
	SectionGradeEnumTwelve          SectionGradeEnum = "12"
	SectionGradeEnumPreKindergarten SectionGradeEnum = "PreKindergarten"
	SectionGradeEnumKindergarten    SectionGradeEnum = "Kindergarten"
	SectionGradeEnumPostGraduate    SectionGradeEnum = "PostGraduate"
	SectionGradeEnumOther           SectionGradeEnum = "Other"
)

type SectionSubjectEnum string

const (
	SectionSubjectEnumEnglishLanguageArts         SectionSubjectEnum = "english/language arts"
	SectionSubjectEnumMath                        SectionSubjectEnum = "math"
	SectionSubjectEnumScience                     SectionSubjectEnum = "science"
	SectionSubjectEnumSocialStudies               SectionSubjectEnum = "social studies"
	SectionSubjectEnumLanguage                    SectionSubjectEnum = "language"
	SectionSubjectEnumHomeroomAdvisory            SectionSubjectEnum = "homeroom/advisory"
	SectionSubjectEnumInterventionsOnlineLearning SectionSubjectEnum = "interventions/online learning"
	SectionSubjectEnumTechnologyAndEngineering    SectionSubjectEnum = "technology and engineering"
	SectionSubjectEnumPeAndHealth                 SectionSubjectEnum = "PE and health"
	SectionSubjectEnumArtsAndMusic                SectionSubjectEnum = "arts and music"
	SectionSubjectEnumOther                       SectionSubjectEnum = "other"
)

type Section struct {
	CourseDescription *string             `json:"course_description,omitempty"`
	CourseName        *string             `json:"course_name,omitempty"`
	CourseNumber      *string             `json:"course_number,omitempty"`
	Created           *string             `json:"created,omitempty"`
	District          *string             `json:"district,omitempty"`
	Grade             *SectionGradeEnum   `json:"grade,omitempty"`
	ID                *string             `json:"id,omitempty"`
	LastModified      *string             `json:"last_modified,omitempty"`
	Name              *string             `json:"name,omitempty"`
	Period            *string             `json:"period,omitempty"`
	School            *string             `json:"school,omitempty"`
	SectionNumber     *string             `json:"section_number,omitempty"`
	SisID             *string             `json:"sis_id,omitempty"`
	Students          []string            `json:"students,omitempty"`
	Subject           *SectionSubjectEnum `json:"subject,omitempty"`
	Teacher           *string             `json:"teacher,omitempty"`
	Teachers          []string            `json:"teachers,omitempty"`
	Term              *Term               `json:"term,omitempty"`
}
