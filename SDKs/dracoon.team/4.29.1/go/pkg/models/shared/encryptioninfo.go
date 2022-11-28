package shared

type EncryptionInfoDataSpaceKeyStateEnum string

const (
	EncryptionInfoDataSpaceKeyStateEnumNone      EncryptionInfoDataSpaceKeyStateEnum = "none"
	EncryptionInfoDataSpaceKeyStateEnumAvailable EncryptionInfoDataSpaceKeyStateEnum = "available"
	EncryptionInfoDataSpaceKeyStateEnumPending   EncryptionInfoDataSpaceKeyStateEnum = "pending"
)

type EncryptionInfoRoomKeyStateEnum string

const (
	EncryptionInfoRoomKeyStateEnumNone      EncryptionInfoRoomKeyStateEnum = "none"
	EncryptionInfoRoomKeyStateEnumAvailable EncryptionInfoRoomKeyStateEnum = "available"
	EncryptionInfoRoomKeyStateEnumPending   EncryptionInfoRoomKeyStateEnum = "pending"
)

type EncryptionInfoUserKeyStateEnum string

const (
	EncryptionInfoUserKeyStateEnumNone      EncryptionInfoUserKeyStateEnum = "none"
	EncryptionInfoUserKeyStateEnumAvailable EncryptionInfoUserKeyStateEnum = "available"
	EncryptionInfoUserKeyStateEnumPending   EncryptionInfoUserKeyStateEnum = "pending"
)

// EncryptionInfo
// Encryption states
type EncryptionInfo struct {
	DataSpaceKeyState EncryptionInfoDataSpaceKeyStateEnum `json:"dataSpaceKeyState"`
	RoomKeyState      EncryptionInfoRoomKeyStateEnum      `json:"roomKeyState"`
	UserKeyState      EncryptionInfoUserKeyStateEnum      `json:"userKeyState"`
}
