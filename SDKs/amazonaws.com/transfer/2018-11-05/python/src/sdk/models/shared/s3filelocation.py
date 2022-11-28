from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3FileLocation:
    r"""S3FileLocation
    <p>Specifies the details for the file location for the file being used in the workflow. Only applicable if you are using S3 storage.</p> <p> You need to provide the bucket and key. The key can represent either a path or a file. This is determined by whether or not you end the key value with the forward slash (/) character. If the final character is \"/\", then your file is copied to the folder, and its name does not change. If, rather, the final character is alphanumeric, your uploaded file is renamed to the path value. In this case, if a file with that name already exists, it is overwritten. </p> <p>For example, if your path is <code>shared-files/bob/</code>, your uploaded files are copied to the <code>shared-files/bob/</code>, folder. If your path is <code>shared-files/today</code>, each uploaded file is copied to the <code>shared-files</code> folder and named <code>today</code>: each upload overwrites the previous version of the <i>bob</i> file.</p>
    """
    
    bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Bucket') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Etag') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VersionId') }})
    
