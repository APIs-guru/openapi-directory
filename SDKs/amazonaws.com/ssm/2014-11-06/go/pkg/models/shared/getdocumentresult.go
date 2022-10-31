package shared

import (
	"time"
)

type GetDocumentResult struct {
	AttachmentsContent []AttachmentContent `json:"AttachmentsContent,omitempty"`
	Content            *string             `json:"Content,omitempty"`
	CreatedDate        *time.Time          `json:"CreatedDate,omitempty"`
	DisplayName        *string             `json:"DisplayName,omitempty"`
	DocumentFormat     *DocumentFormatEnum `json:"DocumentFormat,omitempty"`
	DocumentType       *DocumentTypeEnum   `json:"DocumentType,omitempty"`
	DocumentVersion    *string             `json:"DocumentVersion,omitempty"`
	Name               *string             `json:"Name,omitempty"`
	Requires           []DocumentRequires  `json:"Requires,omitempty"`
	ReviewStatus       *ReviewStatusEnum   `json:"ReviewStatus,omitempty"`
	Status             *DocumentStatusEnum `json:"Status,omitempty"`
	StatusInformation  *string             `json:"StatusInformation,omitempty"`
	VersionName        *string             `json:"VersionName,omitempty"`
}
