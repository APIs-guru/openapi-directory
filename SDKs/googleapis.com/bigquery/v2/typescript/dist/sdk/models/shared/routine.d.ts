import { SpeakeasyBase } from "../../../internal/utils";
import { Argument } from "./argument";
import { RemoteFunctionOptions } from "./remotefunctionoptions";
import { StandardSqlTableType } from "./standardsqltabletype";
import { StandardSqlDataType } from "./standardsqldatatype";
import { RoutineReference } from "./routinereference";
import { SparkOptions } from "./sparkoptions";
export declare enum RoutineDeterminismLevelEnum {
    DeterminismLevelUnspecified = "DETERMINISM_LEVEL_UNSPECIFIED",
    Deterministic = "DETERMINISTIC",
    NotDeterministic = "NOT_DETERMINISTIC"
}
export declare enum RoutineLanguageEnum {
    LanguageUnspecified = "LANGUAGE_UNSPECIFIED",
    Sql = "SQL",
    Javascript = "JAVASCRIPT",
    Python = "PYTHON"
}
export declare enum RoutineRoutineTypeEnum {
    RoutineTypeUnspecified = "ROUTINE_TYPE_UNSPECIFIED",
    ScalarFunction = "SCALAR_FUNCTION",
    Procedure = "PROCEDURE",
    TableValuedFunction = "TABLE_VALUED_FUNCTION"
}
/**
 * A user-defined function or a stored procedure.
**/
export declare class Routine extends SpeakeasyBase {
    arguments?: Argument[];
    creationTime?: string;
    definitionBody?: string;
    description?: string;
    determinismLevel?: RoutineDeterminismLevelEnum;
    etag?: string;
    importedLibraries?: string[];
    language?: RoutineLanguageEnum;
    lastModifiedTime?: string;
    remoteFunctionOptions?: RemoteFunctionOptions;
    returnTableType?: StandardSqlTableType;
    returnType?: StandardSqlDataType;
    routineReference?: RoutineReference;
    routineType?: RoutineRoutineTypeEnum;
    sparkOptions?: SparkOptions;
    strictMode?: boolean;
}
/**
 * A user-defined function or a stored procedure.
**/
export declare class RoutineInput extends SpeakeasyBase {
    arguments?: Argument[];
    definitionBody?: string;
    description?: string;
    determinismLevel?: RoutineDeterminismLevelEnum;
    importedLibraries?: string[];
    language?: RoutineLanguageEnum;
    remoteFunctionOptions?: RemoteFunctionOptions;
    returnTableType?: StandardSqlTableType;
    returnType?: StandardSqlDataType;
    routineReference?: RoutineReference;
    routineType?: RoutineRoutineTypeEnum;
    sparkOptions?: SparkOptions;
    strictMode?: boolean;
}
