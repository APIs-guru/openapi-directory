package operations




type TagsCountTypeEnum string

const (
    TagsCountTypeEnumTp TagsCountTypeEnum = "tp"
TagsCountTypeEnumTl TagsCountTypeEnum = "tl"
TagsCountTypeEnumDp TagsCountTypeEnum = "dp"
TagsCountTypeEnumGr TagsCountTypeEnum = "gr"
)


type TagsCountQueryParams struct {
    Datapoints *string `queryParam:"style=form,explode=true,name=datapoints"`
    Groups *string `queryParam:"style=form,explode=true,name=groups"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    Type *TagsCountTypeEnum `queryParam:"style=form,explode=true,name=type"`
    
}

type TagsCountRequest struct {
    QueryParams TagsCountQueryParams 
    
}

type TagsCountResponse struct {
    ContentType string 
    StatusCode int64 
    SystemObject map[string]interface{} 
    
}

