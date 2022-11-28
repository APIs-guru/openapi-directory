from dataclasses import dataclass, field
from enum import Enum

class PlayMediaControlSchemeEnum(str, Enum):
    CUSTOM = "custom"
    ON_DEMAND = "onDemand"
    INTERNET_RADIO = "internetRadio"
    LIVE_STREAMING = "liveStreaming"
    AUDIO_BOOK = "audioBook"
    PODCAST = "podcast"
    ADVERTISEMENT = "advertisement"

