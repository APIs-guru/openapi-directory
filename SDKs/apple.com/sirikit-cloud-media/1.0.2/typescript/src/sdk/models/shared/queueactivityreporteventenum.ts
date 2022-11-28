


export enum QueueActivityReportEventEnum {
    LocalPlayingElapsed = "local.playing.elapsed",
    LocalPlayingPaused = "local.playing.paused",
    LocalPlayingContinued = "local.playing.continued",
    LocalPlayingScrub = "local.playing.scrub",
    LocalPlayingFastForward = "local.playing.fastForward",
    LocalPlayingFastRewind = "local.playing.fastRewind",
    LocalPlayingTransitionedNaturally = "local.playing.transitioned.naturally",
    LocalPlayingTransitionedSkipNext = "local.playing.transitioned.skip_next",
    LocalPlayingTransitionedSkipPrevious = "local.playing.transitioned.skip_previous",
    LocalPlayingTransitionedQueueReplaced = "local.playing.transitioned.queue_replaced",
    LocalStoppedNaturally = "local.stopped.naturally",
    LocalStoppedSkipPastEnd = "local.stopped.skip_past_end",
    LocalCommandLike = "local.command.like",
    LocalCommandDislike = "local.command.dislike",
    LocalCommandBookmark = "local.command.bookmark"
}
