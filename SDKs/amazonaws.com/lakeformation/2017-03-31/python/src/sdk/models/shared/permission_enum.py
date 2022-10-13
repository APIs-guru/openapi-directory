from dataclasses import dataclass, field
from typing import Enum

class PermissionEnum(str, Enum):
    ALL = "ALL"
    SELECT = "SELECT"
    ALTER = "ALTER"
    DROP = "DROP"
    DELETE = "DELETE"
    INSERT = "INSERT"
    DESCRIBE = "DESCRIBE"
    CREATE_DATABASE = "CREATE_DATABASE"
    CREATE_TABLE = "CREATE_TABLE"
    DATA_LOCATION_ACCESS = "DATA_LOCATION_ACCESS"
    CREATE_TAG = "CREATE_TAG"
    ALTER_TAG = "ALTER_TAG"
    DELETE_TAG = "DELETE_TAG"
    DESCRIBE_TAG = "DESCRIBE_TAG"
    ASSOCIATE_TAG = "ASSOCIATE_TAG"

