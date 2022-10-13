from dataclasses import dataclass, field
from typing import Enum

class QueueActivityReportEventEnum(str, Enum):
    LOCAL_PLAYING_ELAPSED = "local.playing.elapsed"
    LOCAL_PLAYING_PAUSED = "local.playing.paused"
    LOCAL_PLAYING_CONTINUED = "local.playing.continued"
    LOCAL_PLAYING_SCRUB = "local.playing.scrub"
    LOCAL_PLAYING_FAST_FORWARD = "local.playing.fastForward"
    LOCAL_PLAYING_FAST_REWIND = "local.playing.fastRewind"
    LOCAL_PLAYING_TRANSITIONED_NATURALLY = "local.playing.transitioned.naturally"
    LOCAL_PLAYING_TRANSITIONED_SKIP_NEXT = "local.playing.transitioned.skip_next"
    LOCAL_PLAYING_TRANSITIONED_SKIP_PREVIOUS = "local.playing.transitioned.skip_previous"
    LOCAL_PLAYING_TRANSITIONED_QUEUE_REPLACED = "local.playing.transitioned.queue_replaced"
    LOCAL_STOPPED_NATURALLY = "local.stopped.naturally"
    LOCAL_STOPPED_SKIP_PAST_END = "local.stopped.skip_past_end"
    LOCAL_COMMAND_LIKE = "local.command.like"
    LOCAL_COMMAND_DISLIKE = "local.command.dislike"
    LOCAL_COMMAND_BOOKMARK = "local.command.bookmark"

