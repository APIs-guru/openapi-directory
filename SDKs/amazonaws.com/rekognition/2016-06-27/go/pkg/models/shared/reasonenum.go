package shared




type ReasonEnum string

const (
    ReasonEnumExceedsMaxFaces ReasonEnum = "EXCEEDS_MAX_FACES"
ReasonEnumExtremePose ReasonEnum = "EXTREME_POSE"
ReasonEnumLowBrightness ReasonEnum = "LOW_BRIGHTNESS"
ReasonEnumLowSharpness ReasonEnum = "LOW_SHARPNESS"
ReasonEnumLowConfidence ReasonEnum = "LOW_CONFIDENCE"
ReasonEnumSmallBoundingBox ReasonEnum = "SMALL_BOUNDING_BOX"
ReasonEnumLowFaceQuality ReasonEnum = "LOW_FACE_QUALITY"
)


