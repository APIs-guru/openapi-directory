from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import source
from . import datasource
from . import environmentvariable
from . import sslconfiguration
from . import apptype_enum


@dataclass_json
@dataclass
class App:
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppId' }})
    app_source: Optional[source.Source] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppSource' }})
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt' }})
    data_sources: Optional[List[datasource.DataSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataSources' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Domains' }})
    enable_ssl: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableSsl' }})
    environment: Optional[List[environmentvariable.EnvironmentVariable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Environment' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    shortname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Shortname' }})
    ssl_configuration: Optional[sslconfiguration.SslConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SslConfiguration' }})
    stack_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackId' }})
    type: Optional[apptype_enum.AppTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
