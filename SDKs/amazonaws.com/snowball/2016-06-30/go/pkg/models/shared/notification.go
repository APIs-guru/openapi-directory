package shared

// Notification
// <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p>
type Notification struct {
	JobStatesToNotify []JobStateEnum `json:"JobStatesToNotify,omitempty"`
	NotifyAll         *bool          `json:"NotifyAll,omitempty"`
	SnsTopicArn       *string        `json:"SnsTopicARN,omitempty"`
}
