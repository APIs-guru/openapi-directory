package operations



type UserGetMembershipDataByIDPathParams struct {
    MembershipID int64 `pathParam:"style=simple,explode=false,name=membershipId"`
    MembershipType int32 `pathParam:"style=simple,explode=false,name=membershipType"`
    
}

type UserGetMembershipDataByIDRequest struct {
    PathParams UserGetMembershipDataByIDPathParams 
    
}

type UserGetMembershipDataByIDResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

