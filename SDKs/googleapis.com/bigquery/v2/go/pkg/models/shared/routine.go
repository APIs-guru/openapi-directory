package shared

type RoutineDeterminismLevelEnum string

const (
	RoutineDeterminismLevelEnumDeterminismLevelUnspecified RoutineDeterminismLevelEnum = "DETERMINISM_LEVEL_UNSPECIFIED"
	RoutineDeterminismLevelEnumDeterministic               RoutineDeterminismLevelEnum = "DETERMINISTIC"
	RoutineDeterminismLevelEnumNotDeterministic            RoutineDeterminismLevelEnum = "NOT_DETERMINISTIC"
)

type RoutineLanguageEnum string

const (
	RoutineLanguageEnumLanguageUnspecified RoutineLanguageEnum = "LANGUAGE_UNSPECIFIED"
	RoutineLanguageEnumSQL                 RoutineLanguageEnum = "SQL"
	RoutineLanguageEnumJavascript          RoutineLanguageEnum = "JAVASCRIPT"
	RoutineLanguageEnumPython              RoutineLanguageEnum = "PYTHON"
)

type RoutineRoutineTypeEnum string

const (
	RoutineRoutineTypeEnumRoutineTypeUnspecified RoutineRoutineTypeEnum = "ROUTINE_TYPE_UNSPECIFIED"
	RoutineRoutineTypeEnumScalarFunction         RoutineRoutineTypeEnum = "SCALAR_FUNCTION"
	RoutineRoutineTypeEnumProcedure              RoutineRoutineTypeEnum = "PROCEDURE"
	RoutineRoutineTypeEnumTableValuedFunction    RoutineRoutineTypeEnum = "TABLE_VALUED_FUNCTION"
)

type Routine struct {
	Arguments             []Argument                   `json:"arguments"`
	CreationTime          *string                      `json:"creationTime"`
	DefinitionBody        *string                      `json:"definitionBody"`
	Description           *string                      `json:"description"`
	DeterminismLevel      *RoutineDeterminismLevelEnum `json:"determinismLevel"`
	Etag                  *string                      `json:"etag"`
	ImportedLibraries     []string                     `json:"importedLibraries"`
	Language              *RoutineLanguageEnum         `json:"language"`
	LastModifiedTime      *string                      `json:"lastModifiedTime"`
	RemoteFunctionOptions *RemoteFunctionOptions       `json:"remoteFunctionOptions"`
	ReturnTableType       *StandardSQLTableType        `json:"returnTableType"`
	ReturnType            *StandardSQLDataType         `json:"returnType"`
	RoutineReference      *RoutineReference            `json:"routineReference"`
	RoutineType           *RoutineRoutineTypeEnum      `json:"routineType"`
	SparkOptions          *SparkOptions                `json:"sparkOptions"`
	StrictMode            *bool                        `json:"strictMode"`
}
