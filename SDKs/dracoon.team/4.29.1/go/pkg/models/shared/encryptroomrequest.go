package shared

type EncryptRoomRequest struct {
	DataRoomRescueKey     *UserKeyPairContainer `json:"dataRoomRescueKey"`
	IsEncrypted           bool                  `json:"isEncrypted"`
	UseDataSpaceRescueKey *bool                 `json:"useDataSpaceRescueKey"`
}
