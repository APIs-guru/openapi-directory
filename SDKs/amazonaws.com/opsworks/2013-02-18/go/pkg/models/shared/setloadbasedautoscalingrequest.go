package shared

type SetLoadBasedAutoScalingRequest struct {
	DownScaling *AutoScalingThresholds `json:"DownScaling,omitempty"`
	Enable      *bool                  `json:"Enable,omitempty"`
	LayerID     string                 `json:"LayerId"`
	UpScaling   *AutoScalingThresholds `json:"UpScaling,omitempty"`
}
