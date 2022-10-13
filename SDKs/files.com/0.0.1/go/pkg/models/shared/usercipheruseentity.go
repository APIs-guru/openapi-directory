package shared

import (
	"time"
)

type UserCipherUseEntityInterfaceEnum string

const (
	UserCipherUseEntityInterfaceEnumWeb     UserCipherUseEntityInterfaceEnum = "web"
	UserCipherUseEntityInterfaceEnumFtp     UserCipherUseEntityInterfaceEnum = "ftp"
	UserCipherUseEntityInterfaceEnumSftp    UserCipherUseEntityInterfaceEnum = "sftp"
	UserCipherUseEntityInterfaceEnumDav     UserCipherUseEntityInterfaceEnum = "dav"
	UserCipherUseEntityInterfaceEnumDesktop UserCipherUseEntityInterfaceEnum = "desktop"
	UserCipherUseEntityInterfaceEnumRestapi UserCipherUseEntityInterfaceEnum = "restapi"
	UserCipherUseEntityInterfaceEnumRobot   UserCipherUseEntityInterfaceEnum = "robot"
	UserCipherUseEntityInterfaceEnumJsapi   UserCipherUseEntityInterfaceEnum = "jsapi"
)

type UserCipherUseEntity struct {
	CreatedAt      *time.Time                        `json:"created_at"`
	ID             *int32                            `json:"id"`
	Interface      *UserCipherUseEntityInterfaceEnum `json:"interface"`
	ProtocolCipher *string                           `json:"protocol_cipher"`
	UpdatedAt      *time.Time                        `json:"updated_at"`
	UserID         *int32                            `json:"user_id"`
}
