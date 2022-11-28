package shared

type Api2ControllersWebAPIGroceryListControllerPostGroceryListSyncRequestInput struct {
	List  *BigOvenModelAPIGroceryGroceryListInput `json:"list,omitempty"`
	Since *string                                 `json:"since,omitempty"`
}
