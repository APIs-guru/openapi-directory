package shared

type CompleteUploadRequestResolutionStrategyEnum string

const (
	CompleteUploadRequestResolutionStrategyEnumAutorename CompleteUploadRequestResolutionStrategyEnum = "autorename"
	CompleteUploadRequestResolutionStrategyEnumOverwrite  CompleteUploadRequestResolutionStrategyEnum = "overwrite"
	CompleteUploadRequestResolutionStrategyEnumFail       CompleteUploadRequestResolutionStrategyEnum = "fail"
)

type CompleteUploadRequest struct {
	FileKey            *FileKey                                     `json:"fileKey,omitempty"`
	FileName           *string                                      `json:"fileName,omitempty"`
	KeepShareLinks     *bool                                        `json:"keepShareLinks,omitempty"`
	ResolutionStrategy *CompleteUploadRequestResolutionStrategyEnum `json:"resolutionStrategy,omitempty"`
	UserFileKeyList    *UserFileKeyList                             `json:"userFileKeyList,omitempty"`
}
