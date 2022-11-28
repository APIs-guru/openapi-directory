from dataclasses import dataclass, field
from enum import Enum

class AssetTypeEnum(str, Enum):
    NOT_SET = "NotSet"
    IMAGE = "Image"
    FILM = "Film"
    MUSIC = "Music"

