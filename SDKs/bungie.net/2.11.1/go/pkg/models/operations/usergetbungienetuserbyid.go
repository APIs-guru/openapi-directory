package operations



type UserGetBungieNetUserByIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type UserGetBungieNetUserByIDRequest struct {
    PathParams UserGetBungieNetUserByIDPathParams 
    
}

type UserGetBungieNetUserByIDResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

