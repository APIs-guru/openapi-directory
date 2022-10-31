package operations

type DeleteProductMemberPathParams struct {
	ProductID string `pathParam:"style=simple,explode=false,name=productId"`
	UserID    string `pathParam:"style=simple,explode=false,name=userId"`
}

type DeleteProductMemberRequest struct {
	PathParams DeleteProductMemberPathParams
}

type DeleteProductMemberResponse struct {
	ContentType string
	StatusCode  int64
}
