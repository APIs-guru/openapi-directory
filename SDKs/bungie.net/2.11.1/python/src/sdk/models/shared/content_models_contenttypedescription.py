from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ContentModelsContentTypeDescription:
    allow_comments: Optional[bool] = field(default=None)
    auto_english_property_fallback: Optional[bool] = field(default=None)
    bind_identifier_to_property: Optional[str] = field(default=None)
    bound_regex: Optional[str] = field(default=None)
    bulk_uploadable: Optional[bool] = field(default=None)
    c_type: Optional[str] = field(default=None)
    content_description: Optional[str] = field(default=None)
    force_identifier_binding: Optional[bool] = field(default=None)
    name: Optional[str] = field(default=None)
    preview_image: Optional[str] = field(default=None)
    previews: Optional[List[ContentModelsContentPreview]] = field(default=None)
    priority: Optional[int] = field(default=None)
    properties: Optional[List[ContentModelsContentTypeProperty]] = field(default=None)
    property_sections: Optional[List[ContentModelsContentTypePropertySection]] = field(default=None)
    reminder: Optional[str] = field(default=None)
    show_in_content_editor: Optional[bool] = field(default=None)
    suppress_cms_path: Optional[bool] = field(default=None)
    tag_metadata: Optional[List[ContentModelsTagMetadataDefinition]] = field(default=None)
    tag_metadata_items: Optional[dict[str, ContentModelsTagMetadataItem]] = field(default=None)
    type_of: Optional[str] = field(default=None)
    usage_examples: Optional[List[str]] = field(default=None)
    
