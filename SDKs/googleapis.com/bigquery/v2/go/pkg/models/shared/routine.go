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

// Routine
// A user-defined function or a stored procedure.
type Routine struct {
	Arguments             []Argument                   `json:"arguments,omitempty"`
	CreationTime          *string                      `json:"creationTime,omitempty"`
	DefinitionBody        *string                      `json:"definitionBody,omitempty"`
	Description           *string                      `json:"description,omitempty"`
	DeterminismLevel      *RoutineDeterminismLevelEnum `json:"determinismLevel,omitempty"`
	Etag                  *string                      `json:"etag,omitempty"`
	ImportedLibraries     []string                     `json:"importedLibraries,omitempty"`
	Language              *RoutineLanguageEnum         `json:"language,omitempty"`
	LastModifiedTime      *string                      `json:"lastModifiedTime,omitempty"`
	RemoteFunctionOptions *RemoteFunctionOptions       `json:"remoteFunctionOptions,omitempty"`
	ReturnTableType       *StandardSQLTableType        `json:"returnTableType,omitempty"`
	ReturnType            *StandardSQLDataType         `json:"returnType,omitempty"`
	RoutineReference      *RoutineReference            `json:"routineReference,omitempty"`
	RoutineType           *RoutineRoutineTypeEnum      `json:"routineType,omitempty"`
	SparkOptions          *SparkOptions                `json:"sparkOptions,omitempty"`
	StrictMode            *bool                        `json:"strictMode,omitempty"`
}

// RoutineInput
// A user-defined function or a stored procedure.
type RoutineInput struct {
	Arguments             []Argument                   `json:"arguments,omitempty"`
	DefinitionBody        *string                      `json:"definitionBody,omitempty"`
	Description           *string                      `json:"description,omitempty"`
	DeterminismLevel      *RoutineDeterminismLevelEnum `json:"determinismLevel,omitempty"`
	ImportedLibraries     []string                     `json:"importedLibraries,omitempty"`
	Language              *RoutineLanguageEnum         `json:"language,omitempty"`
	RemoteFunctionOptions *RemoteFunctionOptions       `json:"remoteFunctionOptions,omitempty"`
	ReturnTableType       *StandardSQLTableType        `json:"returnTableType,omitempty"`
	ReturnType            *StandardSQLDataType         `json:"returnType,omitempty"`
	RoutineReference      *RoutineReference            `json:"routineReference,omitempty"`
	RoutineType           *RoutineRoutineTypeEnum      `json:"routineType,omitempty"`
	SparkOptions          *SparkOptions                `json:"sparkOptions,omitempty"`
	StrictMode            *bool                        `json:"strictMode,omitempty"`
}
