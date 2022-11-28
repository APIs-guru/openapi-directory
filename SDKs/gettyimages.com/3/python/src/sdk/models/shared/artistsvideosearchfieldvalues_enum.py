from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class ArtistsVideoSearchFieldValuesEnum(str, Enum):
    ID = "id"
    ALLOWED_USE = "allowed_use"
    ALTERNATIVE_IDS = "alternative_ids"
    ARTIST = "artist"
    ASSET_FAMILY = "asset_family"
    ASSET_TYPE = "asset_type"
    CALL_FOR_IMAGE = "call_for_image"
    CAPTION = "caption"
    CLIP_LENGTH = "clip_length"
    COLLECTION_ID = "collection_id"
    COLLECTION_CODE = "collection_code"
    COLLECTION_NAME = "collection_name"
    COMP = "comp"
    COPYRIGHT = "copyright"
    DATE_CREATED = "date_created"
    DATE_SUBMITTED = "date_submitted"
    DETAIL_SET = "detail_set"
    DISPLAY_SET = "display_set"
    EDITORIAL_SEGMENTS = "editorial_segments"
    EVENT_IDS = "event_ids"
    GRAPHICAL_STYLE = "graphical_style"
    HIGH_RES_COMP = "high_res_comp"
    KEYWORDS = "keywords"
    LICENSE_MODEL = "license_model"
    MAX_DIMENSIONS = "max_dimensions"
    MID_RES_COMP = "mid_res_comp"
    ORIENTATION = "orientation"
    PREVIEW = "preview"
    PRODUCT_TYPES = "product_types"
    QUALITY_RANK = "quality_rank"
    REFERRAL_DESTINATIONS = "referral_destinations"
    SUMMARY_SET = "summary_set"
    THUMB = "thumb"
    TITLE = "title"

