package shared

import (
	"time"
)

type Eula struct {
	Content   *string    `json:"content"`
	CreatedAt *time.Time `json:"createdAt"`
	EulaID    *string    `json:"eulaId"`
	Name      *string    `json:"name"`
	UpdatedAt *time.Time `json:"updatedAt"`
}
