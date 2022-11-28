from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class ContentModelsContentTypeProperty:
    attributes: Optional[dict[str, str]] = field(default=None)
    bind_to_property: Optional[str] = field(default=None)
    bound_regex: Optional[str] = field(default=None)
    child_properties: Optional[List[ContentModelsContentTypeProperty]] = field(default=None)
    content_type_allowed: Optional[str] = field(default=None)
    datatype: Optional[int] = field(default=None)
    default_values: Optional[List[ContentModelsContentTypeDefaultValue]] = field(default=None)
    enabled: Optional[bool] = field(default=None)
    entitytype: Optional[str] = field(default=None)
    fallback: Optional[bool] = field(default=None)
    is_combo: Optional[bool] = field(default=None)
    is_external_allowed: Optional[bool] = field(default=None)
    is_image: Optional[bool] = field(default=None)
    is_title: Optional[bool] = field(default=None)
    is_video: Optional[bool] = field(default=None)
    legal_content_types: Optional[List[str]] = field(default=None)
    localizable: Optional[bool] = field(default=None)
    max_byte_length: Optional[int] = field(default=None)
    max_file_size: Optional[int] = field(default=None)
    max_height: Optional[int] = field(default=None)
    max_length: Optional[int] = field(default=None)
    max_width: Optional[int] = field(default=None)
    min_height: Optional[int] = field(default=None)
    min_width: Optional[int] = field(default=None)
    name: Optional[str] = field(default=None)
    order: Optional[int] = field(default=None)
    property_description: Optional[str] = field(default=None)
    property_section: Optional[str] = field(default=None)
    readable_name: Optional[str] = field(default=None)
    regexp: Optional[str] = field(default=None)
    representation_selection: Optional[dict[str, str]] = field(default=None)
    representation_validation_string: Optional[str] = field(default=None)
    required: Optional[bool] = field(default=None)
    root_property_name: Optional[str] = field(default=None)
    rss_attribute: Optional[str] = field(default=None)
    suppress_property: Optional[bool] = field(default=None)
    validate_as: Optional[str] = field(default=None)
    value: Optional[str] = field(default=None)
    visible: Optional[bool] = field(default=None)
    visible_dependency: Optional[str] = field(default=None)
    visible_on: Optional[str] = field(default=None)
    weight: Optional[int] = field(default=None)
    
