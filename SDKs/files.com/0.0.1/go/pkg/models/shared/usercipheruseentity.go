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
	CreatedAt      *time.Time                        `json:"created_at,omitempty"`
	ID             *int32                            `json:"id,omitempty"`
	Interface      *UserCipherUseEntityInterfaceEnum `json:"interface,omitempty"`
	ProtocolCipher *string                           `json:"protocol_cipher,omitempty"`
	UpdatedAt      *time.Time                        `json:"updated_at,omitempty"`
	UserID         *int32                            `json:"user_id,omitempty"`
}
