from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import argument
from . import remotefunctionoptions
from . import standardsqltabletype
from . import standardsqldatatype
from . import routinereference
from . import sparkoptions

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
    arguments: Optional[List[argument.Argument]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arguments' }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    definition_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'definitionBody' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    determinism_level: Optional[RoutineDeterminismLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'determinismLevel' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    imported_libraries: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importedLibraries' }})
    language: Optional[RoutineLanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    last_modified_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedTime' }})
    remote_function_options: Optional[remotefunctionoptions.RemoteFunctionOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteFunctionOptions' }})
    return_table_type: Optional[standardsqltabletype.StandardSQLTableType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnTableType' }})
    return_type: Optional[standardsqldatatype.StandardSQLDataType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnType' }})
    routine_reference: Optional[routinereference.RoutineReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routineReference' }})
    routine_type: Optional[RoutineRoutineTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routineType' }})
    spark_options: Optional[sparkoptions.SparkOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sparkOptions' }})
    strict_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'strictMode' }})
    
