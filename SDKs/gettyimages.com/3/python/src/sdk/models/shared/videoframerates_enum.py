from dataclasses import dataclass, field
from enum import Enum

class VideoFrameRatesEnum(str, Enum):
    TWENTY_THREE_98 = "23.98"
    TWENTY_FOUR = "24"
    TWENTY_FIVE = "25"
    TWENTY_NINE_97 = "29.97"
    THIRTY = "30"
    FIFTY = "50"
    FIFTY_NINE_94 = "59.94"
    SIXTY = "60"

