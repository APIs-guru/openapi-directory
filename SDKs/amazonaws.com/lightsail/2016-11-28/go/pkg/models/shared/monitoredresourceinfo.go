package shared

// MonitoredResourceInfo
// <p>Describes resource being monitored by an alarm.</p> <p>An alarm is a way to monitor your Amazon Lightsail resource metrics. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>
type MonitoredResourceInfo struct {
	Arn          *string           `json:"arn,omitempty"`
	Name         *string           `json:"name,omitempty"`
	ResourceType *ResourceTypeEnum `json:"resourceType,omitempty"`
}
