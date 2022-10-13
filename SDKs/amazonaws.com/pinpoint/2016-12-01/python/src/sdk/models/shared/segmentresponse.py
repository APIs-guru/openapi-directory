from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import segmentdimensions
from . import segmentimportresource
from . import segmentgrouplist
from . import segmenttype_enum


@dataclass_json
@dataclass
class SegmentResponse:
    application_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationId' }})
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    creation_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate' }})
    dimensions: Optional[segmentdimensions.SegmentDimensions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Dimensions' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    import_definition: Optional[segmentimportresource.SegmentImportResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImportDefinition' }})
    last_modified_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedDate' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    segment_groups: Optional[segmentgrouplist.SegmentGroupList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SegmentGroups' }})
    segment_type: segmenttype_enum.SegmentTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SegmentType' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
