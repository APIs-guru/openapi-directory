from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AddFieldsToTemplatePathParams:
    template_id: str = field(metadata={'path_param': { 'field_name': 'template_id', 'style': 'simple', 'explode': False }})
    
class AddFieldsToTemplateAddFieldsDataFieldsAlignmentEnum(str, Enum):
    LEFT = "left"
    CENTER = "center"
    RIGHT = "right"

class AddFieldsToTemplateAddFieldsDataFieldsCheckCharacterEnum(str, Enum):
    AND_NUMBER_10003_ = "&#10003;"
    AND_NUMBER_10004_ = "&#10004;"
    AND_NUMBER_10006_ = "&#10006;"
    AND_NUMBER_10007_ = "&#10007;"
    AND_NUMBER_10008_ = "&#10008;"

class AddFieldsToTemplateAddFieldsDataFieldsDisplayTypeEnum(str, Enum):
    TEXT = "text"
    CHECK = "check"
    QRCODE = "qrcode"
    BARCODE = "barcode"
    IMAGE = "image"
    SHAPE = "shape"

class AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnum(str, Enum):
    NORTH_WEST = "NorthWest"
    NORTH = "North"
    NORTH_EAST = "NorthEast"
    WEST = "West"
    CENTER = "Center"
    EAST = "East"
    SOUTH_WEST = "SouthWest"
    SOUTH = "South"
    SOUTH_EAST = "SouthEast"

class AddFieldsToTemplateAddFieldsDataFieldsImageScaleTypeEnum(str, Enum):
    FIT = "fit"
    FILL = "fill"
    STRETCH = "stretch"

class AddFieldsToTemplateAddFieldsDataFieldsNumberConditionTypeEnum(str, Enum):
    EQUALS = "equals"
    RANGE = "range"
    GTE = "gte"
    GT = "gt"
    LTE = "lte"
    LT = "lt"

class AddFieldsToTemplateAddFieldsDataFieldsOverflowEnum(str, Enum):
    SHRINK_TO_FIT = "shrink_to_fit"
    TRUNCATE = "truncate"

class AddFieldsToTemplateAddFieldsDataFieldsShapeTypeEnum(str, Enum):
    SQUARE = "square"
    RECTANGLE = "rectangle"
    CIRCLE = "circle"
    ELLIPSE = "ellipse"

class AddFieldsToTemplateAddFieldsDataFieldsStringConditionTypeEnum(str, Enum):
    EQUALS = "equals"
    CONTAINS = "contains"
    STARTS_WITH = "starts_with"
    ENDS_WITH = "ends_with"
    REGEX = "regex"

class AddFieldsToTemplateAddFieldsDataFieldsTypeEnum(str, Enum):
    STRING = "string"
    NUMBER = "number"
    BOOLEAN = "boolean"
    DATE = "date"
    ADDRESS = "address"
    COUNTRY = "country"
    EMAIL = "email"
    URL = "url"
    IMAGE = "image"
    SIGNATURE = "signature"
    BARCODE = "barcode"
    COMBINED = "combined"

class AddFieldsToTemplateAddFieldsDataFieldsVAlignmentEnum(str, Enum):
    BOTTOM = "bottom"
    CENTER = "center"
    TOP = "top"


@dataclass_json
@dataclass
class AddFieldsToTemplateAddFieldsDataFields:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    alignment: Optional[AddFieldsToTemplateAddFieldsDataFieldsAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alignment') }})
    auto_calculate_max_length: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoCalculateMaxLength') }})
    background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColor') }})
    background_color_field_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColorFieldName') }})
    background_color_field_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColorFieldRequired') }})
    barcode_symbology: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('barcodeSymbology') }})
    bold: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bold') }})
    character_spacing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('characterSpacing') }})
    check_character: Optional[AddFieldsToTemplateAddFieldsDataFieldsCheckCharacterEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkCharacter') }})
    check_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkColor') }})
    check_color_field_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkColorFieldName') }})
    check_color_field_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkColorFieldRequired') }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    color_field_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorFieldName') }})
    color_field_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorFieldRequired') }})
    comb: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comb') }})
    comb_number_of_cells: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('combNumberOfCells') }})
    comb_value_offset: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('combValueOffset') }})
    combined_field_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('combinedFieldFormat') }})
    combined_field_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('combinedFieldNames') }})
    combined_field_separator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('combinedFieldSeparator') }})
    combined_field_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('combinedFieldType') }})
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    currency: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    date_time_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateTimeFormat') }})
    decimal_places: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('decimalPlaces') }})
    default: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_type: Optional[AddFieldsToTemplateAddFieldsDataFieldsDisplayTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayType') }})
    exclusive_maximum: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusiveMaximum') }})
    exclusive_minimum: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusiveMinimum') }})
    false_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('falseText') }})
    font_size: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fontSize') }})
    height: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    hidden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hidden') }})
    id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_gravity: Optional[AddFieldsToTemplateAddFieldsDataFieldsImageGravityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageGravity') }})
    image_scale_type: Optional[AddFieldsToTemplateAddFieldsDataFieldsImageScaleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageScaleType') }})
    include_time: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeTime') }})
    integer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integer') }})
    invert_boolean_condition: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invertBooleanCondition') }})
    max_length: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxLength') }})
    maximum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximum') }})
    metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    min_length: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minLength') }})
    minimum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimum') }})
    multiline: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiline') }})
    multiline_lines: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multilineLines') }})
    number_condition_range_exclusive_max: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberConditionRangeExclusiveMax') }})
    number_condition_range_exclusive_min: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberConditionRangeExclusiveMin') }})
    number_condition_range_max: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberConditionRangeMax') }})
    number_condition_range_min: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberConditionRangeMin') }})
    number_condition_type: Optional[AddFieldsToTemplateAddFieldsDataFieldsNumberConditionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberConditionType') }})
    opacity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opacity') }})
    option_list: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optionList') }})
    overflow: Optional[AddFieldsToTemplateAddFieldsDataFieldsOverflowEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overflow') }})
    qrcode_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qrcodeColor') }})
    qrcode_color_field_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qrcodeColorFieldName') }})
    qrcode_color_field_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qrcodeColorFieldRequired') }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    rotation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rotation') }})
    shape_border_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shapeBorderColor') }})
    shape_border_color_field_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shapeBorderColorFieldName') }})
    shape_border_color_field_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shapeBorderColorFieldRequired') }})
    shape_border_width: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shapeBorderWidth') }})
    shape_fill_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shapeFillColor') }})
    shape_fill_color_field_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shapeFillColorFieldName') }})
    shape_fill_color_field_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shapeFillColorFieldRequired') }})
    shape_type: Optional[AddFieldsToTemplateAddFieldsDataFieldsShapeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shapeType') }})
    signature_allow_draw: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signatureAllowDraw') }})
    signature_allow_type: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signatureAllowType') }})
    static: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('static') }})
    strikethrough: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strikethrough') }})
    string_condition_type: Optional[AddFieldsToTemplateAddFieldsDataFieldsStringConditionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringConditionType') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    true_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trueText') }})
    type: Optional[AddFieldsToTemplateAddFieldsDataFieldsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    typeface: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeface') }})
    uppercase: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uppercase') }})
    v_alignment: Optional[AddFieldsToTemplateAddFieldsDataFieldsVAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vAlignment') }})
    width: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    x: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('x') }})
    y: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('y') }})
    

@dataclass_json
@dataclass
class AddFieldsToTemplateAddFieldsData:
    fields: List[AddFieldsToTemplateAddFieldsDataFields] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    

@dataclass
class AddFieldsToTemplateSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    
class AddFieldsToTemplateAddFieldsTemplateResponseStatusEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class AddFieldsToTemplateAddFieldsTemplateResponse:
    status: AddFieldsToTemplateAddFieldsTemplateResponseStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    errors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    new_field_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new_field_ids') }})
    

@dataclass
class AddFieldsToTemplateRequest:
    path_params: AddFieldsToTemplatePathParams = field()
    request: AddFieldsToTemplateAddFieldsData = field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddFieldsToTemplateSecurity = field()
    

@dataclass
class AddFieldsToTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    add_fields_template_response: Optional[AddFieldsToTemplateAddFieldsTemplateResponse] = field(default=None)
    
