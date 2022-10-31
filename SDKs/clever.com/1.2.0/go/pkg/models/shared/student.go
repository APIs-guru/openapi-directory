package shared

type StudentEllStatusEnum string

const (
	StudentEllStatusEnumY       StudentEllStatusEnum = "Y"
	StudentEllStatusEnumN       StudentEllStatusEnum = "N"
	StudentEllStatusEnumUnknown StudentEllStatusEnum = ""
)

type StudentGenderEnum string

const (
	StudentGenderEnumM       StudentGenderEnum = "M"
	StudentGenderEnumF       StudentGenderEnum = "F"
	StudentGenderEnumUnknown StudentGenderEnum = ""
)

type StudentGradeEnum string

const (
	StudentGradeEnumOne             StudentGradeEnum = "1"
	StudentGradeEnumTwo             StudentGradeEnum = "2"
	StudentGradeEnumThree           StudentGradeEnum = "3"
	StudentGradeEnumFour            StudentGradeEnum = "4"
	StudentGradeEnumFive            StudentGradeEnum = "5"
	StudentGradeEnumSix             StudentGradeEnum = "6"
	StudentGradeEnumSeven           StudentGradeEnum = "7"
	StudentGradeEnumEight           StudentGradeEnum = "8"
	StudentGradeEnumNine            StudentGradeEnum = "9"
	StudentGradeEnumTen             StudentGradeEnum = "10"
	StudentGradeEnumEleven          StudentGradeEnum = "11"
	StudentGradeEnumTwelve          StudentGradeEnum = "12"
	StudentGradeEnumPreKindergarten StudentGradeEnum = "PreKindergarten"
	StudentGradeEnumKindergarten    StudentGradeEnum = "Kindergarten"
	StudentGradeEnumPostGraduate    StudentGradeEnum = "PostGraduate"
	StudentGradeEnumOther           StudentGradeEnum = "Other"
)

type StudentHispanicEthnicityEnum string

const (
	StudentHispanicEthnicityEnumY       StudentHispanicEthnicityEnum = "Y"
	StudentHispanicEthnicityEnumN       StudentHispanicEthnicityEnum = "N"
	StudentHispanicEthnicityEnumUnknown StudentHispanicEthnicityEnum = ""
)

type StudentRaceEnum string

const (
	StudentRaceEnumCaucasian                      StudentRaceEnum = "Caucasian"
	StudentRaceEnumAsian                          StudentRaceEnum = "Asian"
	StudentRaceEnumBlackOrAfricanAmerican         StudentRaceEnum = "Black or African American"
	StudentRaceEnumAmericanIndian                 StudentRaceEnum = "American Indian"
	StudentRaceEnumHawaiianOrOtherPacificIslander StudentRaceEnum = "Hawaiian or Other Pacific Islander"
	StudentRaceEnumTwoOrMoreRaces                 StudentRaceEnum = "Two or More Races"
	StudentRaceEnumUnknownMixed                   StudentRaceEnum = "Unknown"
	StudentRaceEnumUnknownUpper                   StudentRaceEnum = ""
)

type Student struct {
	Created           *string                       `json:"created,omitempty"`
	Credentials       *Credentials                  `json:"credentials,omitempty"`
	District          *string                       `json:"district,omitempty"`
	Dob               *string                       `json:"dob,omitempty"`
	EllStatus         *StudentEllStatusEnum         `json:"ell_status,omitempty"`
	Email             *string                       `json:"email,omitempty"`
	Gender            *StudentGenderEnum            `json:"gender,omitempty"`
	Grade             *StudentGradeEnum             `json:"grade,omitempty"`
	GraduationYear    *string                       `json:"graduation_year,omitempty"`
	HispanicEthnicity *StudentHispanicEthnicityEnum `json:"hispanic_ethnicity,omitempty"`
	ID                *string                       `json:"id,omitempty"`
	LastModified      *string                       `json:"last_modified,omitempty"`
	Location          *Location                     `json:"location,omitempty"`
	Name              *Name                         `json:"name,omitempty"`
	Race              *StudentRaceEnum              `json:"race,omitempty"`
	School            *string                       `json:"school,omitempty"`
	Schools           []string                      `json:"schools,omitempty"`
	SisID             *string                       `json:"sis_id,omitempty"`
	StateID           *string                       `json:"state_id,omitempty"`
	StudentNumber     *string                       `json:"student_number,omitempty"`
}
