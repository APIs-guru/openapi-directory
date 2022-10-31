package shared

import (
"time")


type OrganizationActionsSecretVisibilityEnum string

const (
    OrganizationActionsSecretVisibilityEnumAll OrganizationActionsSecretVisibilityEnum = "all"
OrganizationActionsSecretVisibilityEnumPrivate OrganizationActionsSecretVisibilityEnum = "private"
OrganizationActionsSecretVisibilityEnumSelected OrganizationActionsSecretVisibilityEnum = "selected"
)


type OrganizationActionsSecret struct {
    CreatedAt time.Time `json:"created_at"`
    Name string `json:"name"`
    SelectedRepositoriesURL *string `json:"selected_repositories_url,omitempty"`
    UpdatedAt time.Time `json:"updated_at"`
    Visibility OrganizationActionsSecretVisibilityEnum `json:"visibility"`
    
}

