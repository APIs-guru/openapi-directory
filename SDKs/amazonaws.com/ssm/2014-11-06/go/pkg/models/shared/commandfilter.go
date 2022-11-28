package shared

// CommandFilter
// <p>Describes a command filter.</p> <note> <p>An instance ID can't be specified when a command status is <code>Pending</code> because the command hasn't run on the instance yet.</p> </note>
type CommandFilter struct {
	Key   CommandFilterKeyEnum `json:"key"`
	Value string               `json:"value"`
}
