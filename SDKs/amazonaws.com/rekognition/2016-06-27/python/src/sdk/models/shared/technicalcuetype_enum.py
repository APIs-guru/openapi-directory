from dataclasses import dataclass, field
from typing import Enum

class TechnicalCueTypeEnum(str, Enum):
    COLOR_BARS = "ColorBars"
    END_CREDITS = "EndCredits"
    BLACK_FRAMES = "BlackFrames"
    OPENING_CREDITS = "OpeningCredits"
    STUDIO_LOGO = "StudioLogo"
    SLATE = "Slate"
    CONTENT = "Content"

