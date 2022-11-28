import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Argument } from "./argument";
import { RemoteFunctionOptions } from "./remotefunctionoptions";
import { StandardSqlTableType } from "./standardsqltabletype";
import { StandardSqlDataType } from "./standardsqldatatype";
import { RoutineReference } from "./routinereference";
import { SparkOptions } from "./sparkoptions";


export enum RoutineDeterminismLevelEnum {
    DeterminismLevelUnspecified = "DETERMINISM_LEVEL_UNSPECIFIED",
    Deterministic = "DETERMINISTIC",
    NotDeterministic = "NOT_DETERMINISTIC"
}

export enum RoutineLanguageEnum {
    LanguageUnspecified = "LANGUAGE_UNSPECIFIED",
    Sql = "SQL",
    Javascript = "JAVASCRIPT",
    Python = "PYTHON"
}

export enum RoutineRoutineTypeEnum {
    RoutineTypeUnspecified = "ROUTINE_TYPE_UNSPECIFIED",
    ScalarFunction = "SCALAR_FUNCTION",
    Procedure = "PROCEDURE",
    TableValuedFunction = "TABLE_VALUED_FUNCTION"
}


// Routine
/** 
 * A user-defined function or a stored procedure.
**/
export class Routine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arguments", elemType: Argument })
  arguments?: Argument[];

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=definitionBody" })
  definitionBody?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=determinismLevel" })
  determinismLevel?: RoutineDeterminismLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=importedLibraries" })
  importedLibraries?: string[];

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: RoutineLanguageEnum;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedTime" })
  lastModifiedTime?: string;

  @SpeakeasyMetadata({ data: "json, name=remoteFunctionOptions" })
  remoteFunctionOptions?: RemoteFunctionOptions;

  @SpeakeasyMetadata({ data: "json, name=returnTableType" })
  returnTableType?: StandardSqlTableType;

  @SpeakeasyMetadata({ data: "json, name=returnType" })
  returnType?: StandardSqlDataType;

  @SpeakeasyMetadata({ data: "json, name=routineReference" })
  routineReference?: RoutineReference;

  @SpeakeasyMetadata({ data: "json, name=routineType" })
  routineType?: RoutineRoutineTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sparkOptions" })
  sparkOptions?: SparkOptions;

  @SpeakeasyMetadata({ data: "json, name=strictMode" })
  strictMode?: boolean;
}


// RoutineInput
/** 
 * A user-defined function or a stored procedure.
**/
export class RoutineInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arguments", elemType: Argument })
  arguments?: Argument[];

  @SpeakeasyMetadata({ data: "json, name=definitionBody" })
  definitionBody?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=determinismLevel" })
  determinismLevel?: RoutineDeterminismLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=importedLibraries" })
  importedLibraries?: string[];

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: RoutineLanguageEnum;

  @SpeakeasyMetadata({ data: "json, name=remoteFunctionOptions" })
  remoteFunctionOptions?: RemoteFunctionOptions;

  @SpeakeasyMetadata({ data: "json, name=returnTableType" })
  returnTableType?: StandardSqlTableType;

  @SpeakeasyMetadata({ data: "json, name=returnType" })
  returnType?: StandardSqlDataType;

  @SpeakeasyMetadata({ data: "json, name=routineReference" })
  routineReference?: RoutineReference;

  @SpeakeasyMetadata({ data: "json, name=routineType" })
  routineType?: RoutineRoutineTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sparkOptions" })
  sparkOptions?: SparkOptions;

  @SpeakeasyMetadata({ data: "json, name=strictMode" })
  strictMode?: boolean;
}
