from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3FileUploadPart:
    r"""S3FileUploadPart
    S3 file upload part information
    """
    
    part_etag: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('partEtag') }})
    part_number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('partNumber') }})
    
