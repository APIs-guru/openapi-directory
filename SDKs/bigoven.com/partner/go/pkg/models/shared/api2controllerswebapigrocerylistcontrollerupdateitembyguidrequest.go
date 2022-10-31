package shared



type Api2ControllersWebAPIGroceryListControllerUpdateItemByGUIDRequest struct {
    Department *string `json:"department,omitempty" form:"name=department"`
    GUID *string `json:"guid,omitempty" form:"name=guid"`
    Ischecked *bool `json:"ischecked,omitempty" form:"name=ischecked"`
    Name *string `json:"name,omitempty" form:"name=name"`
    Notes *string `json:"notes,omitempty" form:"name=notes"`
    Quantity *string `json:"quantity,omitempty" form:"name=quantity"`
    Unit *string `json:"unit,omitempty" form:"name=unit"`
    
}

