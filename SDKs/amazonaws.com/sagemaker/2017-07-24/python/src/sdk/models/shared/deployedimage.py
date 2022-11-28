from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeployedImage:
    r"""DeployedImage
    <p>Gets the Amazon EC2 Container Registry path of the docker image of the model that is hosted in this <a>ProductionVariant</a>.</p> <p>If you used the <code>registry/repository[:tag]</code> form to specify the image path of the primary container when you created the model hosted in this <code>ProductionVariant</code>, the path resolves to a path of the form <code>registry/repository[@digest]</code>. A digest is a hash value that identifies a specific version of an image. For information about Amazon ECR paths, see <a href=\"https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-pull-ecr-image.html\">Pulling an Image</a> in the <i>Amazon ECR User Guide</i>.</p>
    """
    
    resolution_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolutionTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resolved_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolvedImage') }})
    specified_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SpecifiedImage') }})
    
