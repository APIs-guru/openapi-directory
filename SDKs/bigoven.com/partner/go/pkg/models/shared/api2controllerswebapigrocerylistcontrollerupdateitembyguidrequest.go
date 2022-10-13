package shared

type Api2ControllersWebAPIGroceryListControllerUpdateItemByGUIDRequest struct {
	Department *string `json:"department" form:"name=department"`
	GUID       *string `json:"guid" form:"name=guid"`
	Ischecked  *bool   `json:"ischecked" form:"name=ischecked"`
	Name       *string `json:"name" form:"name=name"`
	Notes      *string `json:"notes" form:"name=notes"`
	Quantity   *string `json:"quantity" form:"name=quantity"`
	Unit       *string `json:"unit" form:"name=unit"`
}
