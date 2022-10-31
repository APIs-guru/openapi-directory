package shared

type EncryptRoomRequest struct {
	DataRoomRescueKey     *UserKeyPairContainer `json:"dataRoomRescueKey,omitempty"`
	IsEncrypted           bool                  `json:"isEncrypted"`
	UseDataSpaceRescueKey *bool                 `json:"useDataSpaceRescueKey,omitempty"`
}
