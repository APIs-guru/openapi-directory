package shared



type PrincipalResourcePermissions struct {
    AdditionalDetails *DetailsMap `json:"AdditionalDetails,omitempty"`
    Permissions []PermissionEnum `json:"Permissions,omitempty"`
    PermissionsWithGrantOption []PermissionEnum `json:"PermissionsWithGrantOption,omitempty"`
    Principal *DataLakePrincipal `json:"Principal,omitempty"`
    Resource *Resource `json:"Resource,omitempty"`
    
}

