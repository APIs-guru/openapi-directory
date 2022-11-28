from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DocumentLocation:
    r"""DocumentLocation
    <p>The Amazon S3 bucket that contains the document to be processed. It's used by asynchronous operations such as <a>StartDocumentTextDetection</a>.</p> <p>The input document can be an image file in JPEG or PNG format. It can also be a file in PDF format.</p>
    """
    
    s3_object: Optional[S3Object] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Object') }})
    
