package shared

type Api2ControllersWebAPIImagesControllerRecipePhotosResponse struct {
	ResultCount *int32                  `json:"ResultCount"`
	Results     []BigOvenModelApi2Photo `json:"Results"`
}
