package shared

type LoadBasedAutoScalingConfiguration struct {
	DownScaling *AutoScalingThresholds `json:"DownScaling"`
	Enable      *bool                  `json:"Enable"`
	LayerID     *string                `json:"LayerId"`
	UpScaling   *AutoScalingThresholds `json:"UpScaling"`
}
