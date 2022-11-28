package shared

// EncryptRoomRequest
// Request model for handling encryption settings for a room
type EncryptRoomRequest struct {
	DataRoomRescueKey     *UserKeyPairContainer `json:"dataRoomRescueKey,omitempty"`
	IsEncrypted           bool                  `json:"isEncrypted"`
	UseDataSpaceRescueKey *bool                 `json:"useDataSpaceRescueKey,omitempty"`
}
