package shared

// ScalingConfigurationInfo
// <p>Shows the scaling configuration for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
type ScalingConfigurationInfo struct {
	AutoPause             *bool
	MaxCapacity           *int64
	MinCapacity           *int64
	SecondsBeforeTimeout  *int64
	SecondsUntilAutoPause *int64
	TimeoutAction         *string
}
