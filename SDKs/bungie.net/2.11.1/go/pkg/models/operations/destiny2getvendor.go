package operations

type Destiny2GetVendorPathParams struct {
	CharacterID         int64 `pathParam:"style=simple,explode=false,name=characterId"`
	DestinyMembershipID int64 `pathParam:"style=simple,explode=false,name=destinyMembershipId"`
	MembershipType      int32 `pathParam:"style=simple,explode=false,name=membershipType"`
	VendorHash          int64 `pathParam:"style=simple,explode=false,name=vendorHash"`
}

type Destiny2GetVendorQueryParams struct {
	Components []int32 `queryParam:"style=form,explode=false,name=components"`
}

type Destiny2GetVendorRequest struct {
	PathParams  Destiny2GetVendorPathParams
	QueryParams Destiny2GetVendorQueryParams
}

type Destiny2GetVendorResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
