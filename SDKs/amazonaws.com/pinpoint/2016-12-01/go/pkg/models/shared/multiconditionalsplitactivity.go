package shared

// MultiConditionalSplitActivity
// <p>Specifies the settings for a multivariate split activity in a journey. This type of activity sends participants down one of as many as five paths (including a default <i>Else</i> path) in a journey, based on conditions that you specify.</p> <note><p>To create multivariate split activities that send participants down different paths based on push notification events (such as Open or Received events), your mobile app has to specify the User ID and Endpoint ID values. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/integrate.html">Integrating Amazon Pinpoint with your application</a> in the <i>Amazon Pinpoint Developer Guide</i>.</p></note>
type MultiConditionalSplitActivity struct {
	Branches           []MultiConditionalBranch `json:"Branches,omitempty"`
	DefaultActivity    *string                  `json:"DefaultActivity,omitempty"`
	EvaluationWaitTime *WaitTime                `json:"EvaluationWaitTime,omitempty"`
}
