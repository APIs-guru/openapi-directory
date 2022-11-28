from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeployAsApplicationConfigurationUpdate:
    r"""DeployAsApplicationConfigurationUpdate
    Updates to the configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state..
    """
    
    s3_content_location_update: S3ContentBaseLocationUpdate = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3ContentLocationUpdate') }})
    
