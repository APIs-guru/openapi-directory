package shared

type CompleteUploadRequestResolutionStrategyEnum string

const (
	CompleteUploadRequestResolutionStrategyEnumAutorename CompleteUploadRequestResolutionStrategyEnum = "autorename"
	CompleteUploadRequestResolutionStrategyEnumOverwrite  CompleteUploadRequestResolutionStrategyEnum = "overwrite"
	CompleteUploadRequestResolutionStrategyEnumFail       CompleteUploadRequestResolutionStrategyEnum = "fail"
)

type CompleteUploadRequest struct {
	FileKey            *FileKey                                     `json:"fileKey"`
	FileName           *string                                      `json:"fileName"`
	KeepShareLinks     *bool                                        `json:"keepShareLinks"`
	ResolutionStrategy *CompleteUploadRequestResolutionStrategyEnum `json:"resolutionStrategy"`
	UserFileKeyList    *UserFileKeyList                             `json:"userFileKeyList"`
}
