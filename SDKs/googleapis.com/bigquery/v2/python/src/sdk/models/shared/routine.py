from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class RoutineDeterminismLevelEnum(str, Enum):
    DETERMINISM_LEVEL_UNSPECIFIED = "DETERMINISM_LEVEL_UNSPECIFIED"
    DETERMINISTIC = "DETERMINISTIC"
    NOT_DETERMINISTIC = "NOT_DETERMINISTIC"

class RoutineLanguageEnum(str, Enum):
    LANGUAGE_UNSPECIFIED = "LANGUAGE_UNSPECIFIED"
    SQL = "SQL"
    JAVASCRIPT = "JAVASCRIPT"
    PYTHON = "PYTHON"

class RoutineRoutineTypeEnum(str, Enum):
    ROUTINE_TYPE_UNSPECIFIED = "ROUTINE_TYPE_UNSPECIFIED"
    SCALAR_FUNCTION = "SCALAR_FUNCTION"
    PROCEDURE = "PROCEDURE"
    TABLE_VALUED_FUNCTION = "TABLE_VALUED_FUNCTION"


@dataclass_json
@dataclass
class Routine:
    r"""Routine
    A user-defined function or a stored procedure.
    """
    
    arguments: Optional[List[Argument]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arguments') }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime') }})
    definition_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definitionBody') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    determinism_level: Optional[RoutineDeterminismLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('determinismLevel') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    imported_libraries: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importedLibraries') }})
    language: Optional[RoutineLanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    last_modified_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedTime') }})
    remote_function_options: Optional[RemoteFunctionOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteFunctionOptions') }})
    return_table_type: Optional[StandardSQLTableType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnTableType') }})
    return_type: Optional[StandardSQLDataType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnType') }})
    routine_reference: Optional[RoutineReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routineReference') }})
    routine_type: Optional[RoutineRoutineTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routineType') }})
    spark_options: Optional[SparkOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkOptions') }})
    strict_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strictMode') }})
    

@dataclass_json
@dataclass
class RoutineInput:
    r"""RoutineInput
    A user-defined function or a stored procedure.
    """
    
    arguments: Optional[List[Argument]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arguments') }})
    definition_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definitionBody') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    determinism_level: Optional[RoutineDeterminismLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('determinismLevel') }})
    imported_libraries: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importedLibraries') }})
    language: Optional[RoutineLanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    remote_function_options: Optional[RemoteFunctionOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteFunctionOptions') }})
    return_table_type: Optional[StandardSQLTableType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnTableType') }})
    return_type: Optional[StandardSQLDataType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnType') }})
    routine_reference: Optional[RoutineReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routineReference') }})
    routine_type: Optional[RoutineRoutineTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routineType') }})
    spark_options: Optional[SparkOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkOptions') }})
    strict_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strictMode') }})
    
