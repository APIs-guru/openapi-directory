package shared

type CompleteS3FileUploadRequestResolutionStrategyEnum string

const (
	CompleteS3FileUploadRequestResolutionStrategyEnumAutorename CompleteS3FileUploadRequestResolutionStrategyEnum = "autorename"
	CompleteS3FileUploadRequestResolutionStrategyEnumOverwrite  CompleteS3FileUploadRequestResolutionStrategyEnum = "overwrite"
	CompleteS3FileUploadRequestResolutionStrategyEnumFail       CompleteS3FileUploadRequestResolutionStrategyEnum = "fail"
)

type CompleteS3FileUploadRequest struct {
	FileKey            *FileKey                                           `json:"fileKey,omitempty"`
	FileName           *string                                            `json:"fileName,omitempty"`
	KeepShareLinks     *bool                                              `json:"keepShareLinks,omitempty"`
	Parts              []S3FileUploadPart                                 `json:"parts"`
	ResolutionStrategy *CompleteS3FileUploadRequestResolutionStrategyEnum `json:"resolutionStrategy,omitempty"`
}
