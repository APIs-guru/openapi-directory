package shared

// DedicatedIP
// <p>Contains information about a dedicated IP address that is associated with your Amazon SES account.</p> <p>To learn more about requesting dedicated IP addresses, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/dedicated-ip-case.html">Requesting and Relinquishing Dedicated IP Addresses</a> in the <i>Amazon SES Developer Guide</i>.</p>
type DedicatedIP struct {
	IP               string           `json:"Ip"`
	PoolName         *string          `json:"PoolName,omitempty"`
	WarmupPercentage int64            `json:"WarmupPercentage"`
	WarmupStatus     WarmupStatusEnum `json:"WarmupStatus"`
}
