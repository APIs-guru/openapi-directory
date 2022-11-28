from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ImagePermission:
    r"""ImagePermission
    Describes the AWS accounts that have been granted permission to use a shared image. For more information about sharing images, see <a href=\"https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html\"> Share or Unshare a Custom WorkSpaces Image</a>.
    """
    
    shared_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SharedAccountId') }})
    
