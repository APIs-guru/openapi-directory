package operations

type GetSyndicatedCommentsFormatEnum string

const (
	GetSyndicatedCommentsFormatEnumXML   GetSyndicatedCommentsFormatEnum = "xml"
	GetSyndicatedCommentsFormatEnumRss   GetSyndicatedCommentsFormatEnum = "rss"
	GetSyndicatedCommentsFormatEnumRss2  GetSyndicatedCommentsFormatEnum = "rss2"
	GetSyndicatedCommentsFormatEnumAtom  GetSyndicatedCommentsFormatEnum = "atom"
	GetSyndicatedCommentsFormatEnumAtom1 GetSyndicatedCommentsFormatEnum = "atom1"
	GetSyndicatedCommentsFormatEnumJSON  GetSyndicatedCommentsFormatEnum = "json"
	GetSyndicatedCommentsFormatEnumJson1 GetSyndicatedCommentsFormatEnum = "json1"
)

type GetSyndicatedCommentsPathParams struct {
	Format GetSyndicatedCommentsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type GetSyndicatedCommentsQueryParams struct {
	AccountID        *string `queryParam:"style=form,explode=true,name=accountId"`
	AccountName      *string `queryParam:"style=form,explode=true,name=accountName"`
	VideoChannelID   *string `queryParam:"style=form,explode=true,name=videoChannelId"`
	VideoChannelName *string `queryParam:"style=form,explode=true,name=videoChannelName"`
	VideoID          *string `queryParam:"style=form,explode=true,name=videoId"`
}

type GetSyndicatedCommentsRequest struct {
	PathParams  GetSyndicatedCommentsPathParams
	QueryParams GetSyndicatedCommentsQueryParams
}

type GetSyndicatedCommentsResponse struct {
	Body                                          []byte
	ContentType                                   string
	Headers                                       map[string][]string
	StatusCode                                    int64
	GetSyndicatedComments204ApplicationJSONObject map[string]interface{}
}
