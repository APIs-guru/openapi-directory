package shared

type ProvinceIDEnum string

const (
	ProvinceIDEnumAb ProvinceIDEnum = "AB"
	ProvinceIDEnumBc ProvinceIDEnum = "BC"
	ProvinceIDEnumMb ProvinceIDEnum = "MB"
	ProvinceIDEnumNb ProvinceIDEnum = "NB"
	ProvinceIDEnumNl ProvinceIDEnum = "NL"
	ProvinceIDEnumNs ProvinceIDEnum = "NS"
	ProvinceIDEnumNt ProvinceIDEnum = "NT"
	ProvinceIDEnumNu ProvinceIDEnum = "NU"
	ProvinceIDEnumOn ProvinceIDEnum = "ON"
	ProvinceIDEnumPe ProvinceIDEnum = "PE"
	ProvinceIDEnumQc ProvinceIDEnum = "QC"
	ProvinceIDEnumSk ProvinceIDEnum = "SK"
	ProvinceIDEnumYt ProvinceIDEnum = "YT"
)

type Province struct {
	ID          *ProvinceIDEnum `json:"id,omitempty"`
	NameEn      *string         `json:"nameEn,omitempty"`
	NameFr      *string         `json:"nameFr,omitempty"`
	NextHoliday *Holiday        `json:"nextHoliday,omitempty"`
	Provinces   []Holiday       `json:"provinces,omitempty"`
}
