package shared

// DbClusterBacktrackMessage
// Contains the result of a successful invocation of the <code>DescribeDBClusterBacktracks</code> action.
type DbClusterBacktrackMessage struct {
	DbClusterBacktracks []DbClusterBacktrack
	Marker              *string
}
