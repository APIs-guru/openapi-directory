package shared

type LoadBasedAutoScalingConfiguration struct {
	DownScaling *AutoScalingThresholds `json:"DownScaling,omitempty"`
	Enable      *bool                  `json:"Enable,omitempty"`
	LayerID     *string                `json:"LayerId,omitempty"`
	UpScaling   *AutoScalingThresholds `json:"UpScaling,omitempty"`
}
