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
	CourseDescription *string             `json:"course_description"`
	CourseName        *string             `json:"course_name"`
	CourseNumber      *string             `json:"course_number"`
	Created           *string             `json:"created"`
	District          *string             `json:"district"`
	Grade             *SectionGradeEnum   `json:"grade"`
	ID                *string             `json:"id"`
	LastModified      *string             `json:"last_modified"`
	Name              *string             `json:"name"`
	Period            *string             `json:"period"`
	School            *string             `json:"school"`
	SectionNumber     *string             `json:"section_number"`
	SisID             *string             `json:"sis_id"`
	Students          []string            `json:"students"`
	Subject           *SectionSubjectEnum `json:"subject"`
	Teacher           *string             `json:"teacher"`
	Teachers          []string            `json:"teachers"`
	Term              *Term               `json:"term"`
}
