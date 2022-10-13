package shared

type SetLoadBasedAutoScalingRequest struct {
	DownScaling *AutoScalingThresholds `json:"DownScaling"`
	Enable      *bool                  `json:"Enable"`
	LayerID     string                 `json:"LayerId"`
	UpScaling   *AutoScalingThresholds `json:"UpScaling"`
}
