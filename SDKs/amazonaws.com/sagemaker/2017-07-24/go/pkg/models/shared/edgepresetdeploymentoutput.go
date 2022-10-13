package shared

type EdgePresetDeploymentOutput struct {
	Artifact      *string                         `json:"Artifact"`
	Status        *EdgePresetDeploymentStatusEnum `json:"Status"`
	StatusMessage *string                         `json:"StatusMessage"`
	Type          EdgePresetDeploymentTypeEnum    `json:"Type"`
}
