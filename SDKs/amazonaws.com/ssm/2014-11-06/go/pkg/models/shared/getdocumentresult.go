package shared

import (
	"time"
)

type GetDocumentResult struct {
	AttachmentsContent []AttachmentContent `json:"AttachmentsContent"`
	Content            *string             `json:"Content"`
	CreatedDate        *time.Time          `json:"CreatedDate"`
	DisplayName        *string             `json:"DisplayName"`
	DocumentFormat     *DocumentFormatEnum `json:"DocumentFormat"`
	DocumentType       *DocumentTypeEnum   `json:"DocumentType"`
	DocumentVersion    *string             `json:"DocumentVersion"`
	Name               *string             `json:"Name"`
	Requires           []DocumentRequires  `json:"Requires"`
	ReviewStatus       *ReviewStatusEnum   `json:"ReviewStatus"`
	Status             *DocumentStatusEnum `json:"Status"`
	StatusInformation  *string             `json:"StatusInformation"`
	VersionName        *string             `json:"VersionName"`
}
