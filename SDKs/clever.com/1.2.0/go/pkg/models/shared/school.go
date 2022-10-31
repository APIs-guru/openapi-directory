package shared




type SchoolHighGradeEnum string

const (
    SchoolHighGradeEnumOne SchoolHighGradeEnum = "1"
SchoolHighGradeEnumTwo SchoolHighGradeEnum = "2"
SchoolHighGradeEnumThree SchoolHighGradeEnum = "3"
SchoolHighGradeEnumFour SchoolHighGradeEnum = "4"
SchoolHighGradeEnumFive SchoolHighGradeEnum = "5"
SchoolHighGradeEnumSix SchoolHighGradeEnum = "6"
SchoolHighGradeEnumSeven SchoolHighGradeEnum = "7"
SchoolHighGradeEnumEight SchoolHighGradeEnum = "8"
SchoolHighGradeEnumNine SchoolHighGradeEnum = "9"
SchoolHighGradeEnumTen SchoolHighGradeEnum = "10"
SchoolHighGradeEnumEleven SchoolHighGradeEnum = "11"
SchoolHighGradeEnumTwelve SchoolHighGradeEnum = "12"
SchoolHighGradeEnumPreKindergarten SchoolHighGradeEnum = "PreKindergarten"
SchoolHighGradeEnumKindergarten SchoolHighGradeEnum = "Kindergarten"
SchoolHighGradeEnumPostGraduate SchoolHighGradeEnum = "PostGraduate"
SchoolHighGradeEnumOther SchoolHighGradeEnum = "Other"
)



type SchoolLowGradeEnum string

const (
    SchoolLowGradeEnumOne SchoolLowGradeEnum = "1"
SchoolLowGradeEnumTwo SchoolLowGradeEnum = "2"
SchoolLowGradeEnumThree SchoolLowGradeEnum = "3"
SchoolLowGradeEnumFour SchoolLowGradeEnum = "4"
SchoolLowGradeEnumFive SchoolLowGradeEnum = "5"
SchoolLowGradeEnumSix SchoolLowGradeEnum = "6"
SchoolLowGradeEnumSeven SchoolLowGradeEnum = "7"
SchoolLowGradeEnumEight SchoolLowGradeEnum = "8"
SchoolLowGradeEnumNine SchoolLowGradeEnum = "9"
SchoolLowGradeEnumTen SchoolLowGradeEnum = "10"
SchoolLowGradeEnumEleven SchoolLowGradeEnum = "11"
SchoolLowGradeEnumTwelve SchoolLowGradeEnum = "12"
SchoolLowGradeEnumPreKindergarten SchoolLowGradeEnum = "PreKindergarten"
SchoolLowGradeEnumKindergarten SchoolLowGradeEnum = "Kindergarten"
SchoolLowGradeEnumPostGraduate SchoolLowGradeEnum = "PostGraduate"
SchoolLowGradeEnumOther SchoolLowGradeEnum = "Other"
)


type School struct {
    Created *string `json:"created,omitempty"`
    District *string `json:"district,omitempty"`
    HighGrade *SchoolHighGradeEnum `json:"high_grade,omitempty"`
    ID *string `json:"id,omitempty"`
    LastModified *string `json:"last_modified,omitempty"`
    Location *Location `json:"location,omitempty"`
    LowGrade *SchoolLowGradeEnum `json:"low_grade,omitempty"`
    MdrNumber *string `json:"mdr_number,omitempty"`
    Name *string `json:"name,omitempty"`
    NcesID *string `json:"nces_id,omitempty"`
    Phone *string `json:"phone,omitempty"`
    Principal *Principal `json:"principal,omitempty"`
    SchoolNumber *string `json:"school_number,omitempty"`
    SisID *string `json:"sis_id,omitempty"`
    StateID *string `json:"state_id,omitempty"`
    
}

