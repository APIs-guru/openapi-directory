import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Argument } from "./argument";
import { RemoteFunctionOptions } from "./remotefunctionoptions";
import { StandardSqlTableType } from "./standardsqltabletype";
import { StandardSqlDataType } from "./standardsqldatatype";
import { RoutineReference } from "./routinereference";
import { SparkOptions } from "./sparkoptions";

export enum RoutineDeterminismLevelEnum {
    DeterminismLevelUnspecified = "DETERMINISM_LEVEL_UNSPECIFIED"
,    Deterministic = "DETERMINISTIC"
,    NotDeterministic = "NOT_DETERMINISTIC"
}

export enum RoutineLanguageEnum {
    LanguageUnspecified = "LANGUAGE_UNSPECIFIED"
,    Sql = "SQL"
,    Javascript = "JAVASCRIPT"
,    Python = "PYTHON"
}

export enum RoutineRoutineTypeEnum {
    RoutineTypeUnspecified = "ROUTINE_TYPE_UNSPECIFIED"
,    ScalarFunction = "SCALAR_FUNCTION"
,    Procedure = "PROCEDURE"
,    TableValuedFunction = "TABLE_VALUED_FUNCTION"
}


// Routine
/** 
 * A user-defined function or a stored procedure.
**/
export class Routine extends SpeakeasyBase {
  @Metadata({ data: "json, name=arguments", elemType: shared.Argument })
  arguments?: Argument[];

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=definitionBody" })
  definitionBody?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=determinismLevel" })
  determinismLevel?: RoutineDeterminismLevelEnum;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=importedLibraries" })
  importedLibraries?: string[];

  @Metadata({ data: "json, name=language" })
  language?: RoutineLanguageEnum;

  @Metadata({ data: "json, name=lastModifiedTime" })
  lastModifiedTime?: string;

  @Metadata({ data: "json, name=remoteFunctionOptions" })
  remoteFunctionOptions?: RemoteFunctionOptions;

  @Metadata({ data: "json, name=returnTableType" })
  returnTableType?: StandardSqlTableType;

  @Metadata({ data: "json, name=returnType" })
  returnType?: StandardSqlDataType;

  @Metadata({ data: "json, name=routineReference" })
  routineReference?: RoutineReference;

  @Metadata({ data: "json, name=routineType" })
  routineType?: RoutineRoutineTypeEnum;

  @Metadata({ data: "json, name=sparkOptions" })
  sparkOptions?: SparkOptions;

  @Metadata({ data: "json, name=strictMode" })
  strictMode?: boolean;
}
