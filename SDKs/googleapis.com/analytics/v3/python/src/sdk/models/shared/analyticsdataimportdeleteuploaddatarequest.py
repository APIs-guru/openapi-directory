from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AnalyticsDataimportDeleteUploadDataRequest:
    r"""AnalyticsDataimportDeleteUploadDataRequest
    Request template for the delete upload data request.
    """
    
    custom_data_import_uids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customDataImportUids') }})
    
