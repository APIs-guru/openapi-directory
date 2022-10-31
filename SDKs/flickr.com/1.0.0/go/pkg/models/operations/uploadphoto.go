package operations




type UploadPhotoRequestBodyContentTypeEnum string

const (
    UploadPhotoRequestBodyContentTypeEnumOne UploadPhotoRequestBodyContentTypeEnum = "1"
UploadPhotoRequestBodyContentTypeEnumTwo UploadPhotoRequestBodyContentTypeEnum = "2"
UploadPhotoRequestBodyContentTypeEnumThree UploadPhotoRequestBodyContentTypeEnum = "3"
)



type UploadPhotoRequestBodyHiddenEnum string

const (
    UploadPhotoRequestBodyHiddenEnumOne UploadPhotoRequestBodyHiddenEnum = "1"
UploadPhotoRequestBodyHiddenEnumTwo UploadPhotoRequestBodyHiddenEnum = "2"
)



type UploadPhotoRequestBodyIsFamilyEnum string

const (
    UploadPhotoRequestBodyIsFamilyEnumZero UploadPhotoRequestBodyIsFamilyEnum = "0"
UploadPhotoRequestBodyIsFamilyEnumOne UploadPhotoRequestBodyIsFamilyEnum = "1"
)



type UploadPhotoRequestBodyIsFriendEnum string

const (
    UploadPhotoRequestBodyIsFriendEnumZero UploadPhotoRequestBodyIsFriendEnum = "0"
UploadPhotoRequestBodyIsFriendEnumOne UploadPhotoRequestBodyIsFriendEnum = "1"
)



type UploadPhotoRequestBodyIsPublicEnum string

const (
    UploadPhotoRequestBodyIsPublicEnumZero UploadPhotoRequestBodyIsPublicEnum = "0"
UploadPhotoRequestBodyIsPublicEnumOne UploadPhotoRequestBodyIsPublicEnum = "1"
)


type UploadPhotoRequestBodyPhoto struct {
    Content []byte `multipartForm:"content"`
    Photo string `multipartForm:"name=photo"`
    
}


type UploadPhotoRequestBodySafetyLevelEnum string

const (
    UploadPhotoRequestBodySafetyLevelEnumOne UploadPhotoRequestBodySafetyLevelEnum = "1"
UploadPhotoRequestBodySafetyLevelEnumTwo UploadPhotoRequestBodySafetyLevelEnum = "2"
UploadPhotoRequestBodySafetyLevelEnumThree UploadPhotoRequestBodySafetyLevelEnum = "3"
)


type UploadPhotoRequestBody struct {
    APIKey string `multipartForm:"name=api_key"`
    ContentType *UploadPhotoRequestBodyContentTypeEnum `multipartForm:"name=content_type"`
    Description *string `multipartForm:"name=description"`
    Hidden *UploadPhotoRequestBodyHiddenEnum `multipartForm:"name=hidden"`
    IsFamily *UploadPhotoRequestBodyIsFamilyEnum `multipartForm:"name=is_family"`
    IsFriend *UploadPhotoRequestBodyIsFriendEnum `multipartForm:"name=is_friend"`
    IsPublic *UploadPhotoRequestBodyIsPublicEnum `multipartForm:"name=is_public"`
    Photo UploadPhotoRequestBodyPhoto `multipartForm:"file"`
    SafetyLevel *UploadPhotoRequestBodySafetyLevelEnum `multipartForm:"name=safety_level"`
    Tags *string `multipartForm:"name=tags"`
    Title *string `multipartForm:"name=title"`
    
}

type UploadPhotoRequest struct {
    Request UploadPhotoRequestBody `request:"mediaType=multipart/form-data"`
    
}

type UploadPhotoResponse struct {
    ContentType string 
    StatusCode int64 
    UploadPhoto200ApplicationJSONObject map[string]interface{} 
    
}

