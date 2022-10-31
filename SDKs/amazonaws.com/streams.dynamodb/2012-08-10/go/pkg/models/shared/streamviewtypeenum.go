package shared




type StreamViewTypeEnum string

const (
    StreamViewTypeEnumNewImage StreamViewTypeEnum = "NEW_IMAGE"
StreamViewTypeEnumOldImage StreamViewTypeEnum = "OLD_IMAGE"
StreamViewTypeEnumNewAndOldImages StreamViewTypeEnum = "NEW_AND_OLD_IMAGES"
StreamViewTypeEnumKeysOnly StreamViewTypeEnum = "KEYS_ONLY"
)


