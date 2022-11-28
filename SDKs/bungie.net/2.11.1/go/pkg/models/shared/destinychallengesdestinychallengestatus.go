package shared

// DestinyChallengesDestinyChallengeStatusObjective
// The progress - including completion status - of the active challenge.
type DestinyChallengesDestinyChallengeStatusObjective struct {
	ActivityHash    *int64
	Complete        *bool
	CompletionValue *int32
	DestinationHash *int64
	ObjectiveHash   *int64
	Progress        *int32
	Visible         *bool
}

// DestinyChallengesDestinyChallengeStatus
// Represents the status and other related information for a challenge that is - or was - available to a player.
// A challenge is a bonus objective, generally tacked onto Quests or Activities, that provide additional variations on play.
type DestinyChallengesDestinyChallengeStatus struct {
	Objective *DestinyChallengesDestinyChallengeStatusObjective
}
