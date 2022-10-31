package shared

import (
"time")

type DocumentDescription struct {
    ApprovedVersion *string `json:"ApprovedVersion,omitempty"`
    AttachmentsInformation []AttachmentInformation `json:"AttachmentsInformation,omitempty"`
    Author *string `json:"Author,omitempty"`
    CreatedDate *time.Time `json:"CreatedDate,omitempty"`
    DefaultVersion *string `json:"DefaultVersion,omitempty"`
    Description *string `json:"Description,omitempty"`
    DisplayName *string `json:"DisplayName,omitempty"`
    DocumentFormat *DocumentFormatEnum `json:"DocumentFormat,omitempty"`
    DocumentType *DocumentTypeEnum `json:"DocumentType,omitempty"`
    DocumentVersion *string `json:"DocumentVersion,omitempty"`
    Hash *string `json:"Hash,omitempty"`
    HashType *DocumentHashTypeEnum `json:"HashType,omitempty"`
    LatestVersion *string `json:"LatestVersion,omitempty"`
    Name *string `json:"Name,omitempty"`
    Owner *string `json:"Owner,omitempty"`
    Parameters []DocumentParameter `json:"Parameters,omitempty"`
    PendingReviewVersion *string `json:"PendingReviewVersion,omitempty"`
    PlatformTypes []PlatformTypeEnum `json:"PlatformTypes,omitempty"`
    Requires []DocumentRequires `json:"Requires,omitempty"`
    ReviewInformation []ReviewInformation `json:"ReviewInformation,omitempty"`
    ReviewStatus *ReviewStatusEnum `json:"ReviewStatus,omitempty"`
    SchemaVersion *string `json:"SchemaVersion,omitempty"`
    Sha1 *string `json:"Sha1,omitempty"`
    Status *DocumentStatusEnum `json:"Status,omitempty"`
    StatusInformation *string `json:"StatusInformation,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    TargetType *string `json:"TargetType,omitempty"`
    VersionName *string `json:"VersionName,omitempty"`
    
}

