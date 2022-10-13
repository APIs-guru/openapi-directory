from dataclasses import dataclass, field
from typing import Enum

class AssetTypeEnum(str, Enum):
    NOT_SET = "NotSet"
    IMAGE = "Image"
    FILM = "Film"
    MUSIC = "Music"

