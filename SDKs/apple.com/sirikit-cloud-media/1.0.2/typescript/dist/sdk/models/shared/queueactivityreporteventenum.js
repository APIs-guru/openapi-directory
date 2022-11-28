export var QueueActivityReportEventEnum;
(function (QueueActivityReportEventEnum) {
    QueueActivityReportEventEnum["LocalPlayingElapsed"] = "local.playing.elapsed";
    QueueActivityReportEventEnum["LocalPlayingPaused"] = "local.playing.paused";
    QueueActivityReportEventEnum["LocalPlayingContinued"] = "local.playing.continued";
    QueueActivityReportEventEnum["LocalPlayingScrub"] = "local.playing.scrub";
    QueueActivityReportEventEnum["LocalPlayingFastForward"] = "local.playing.fastForward";
    QueueActivityReportEventEnum["LocalPlayingFastRewind"] = "local.playing.fastRewind";
    QueueActivityReportEventEnum["LocalPlayingTransitionedNaturally"] = "local.playing.transitioned.naturally";
    QueueActivityReportEventEnum["LocalPlayingTransitionedSkipNext"] = "local.playing.transitioned.skip_next";
    QueueActivityReportEventEnum["LocalPlayingTransitionedSkipPrevious"] = "local.playing.transitioned.skip_previous";
    QueueActivityReportEventEnum["LocalPlayingTransitionedQueueReplaced"] = "local.playing.transitioned.queue_replaced";
    QueueActivityReportEventEnum["LocalStoppedNaturally"] = "local.stopped.naturally";
    QueueActivityReportEventEnum["LocalStoppedSkipPastEnd"] = "local.stopped.skip_past_end";
    QueueActivityReportEventEnum["LocalCommandLike"] = "local.command.like";
    QueueActivityReportEventEnum["LocalCommandDislike"] = "local.command.dislike";
    QueueActivityReportEventEnum["LocalCommandBookmark"] = "local.command.bookmark";
})(QueueActivityReportEventEnum || (QueueActivityReportEventEnum = {}));
