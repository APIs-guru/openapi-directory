package shared

import (
	"time"
)

type ResourceShareInvitation struct {
	InvitationTimestamp        *time.Time                         `json:"invitationTimestamp,omitempty"`
	ReceiverAccountID          *string                            `json:"receiverAccountId,omitempty"`
	ReceiverArn                *string                            `json:"receiverArn,omitempty"`
	ResourceShareArn           *string                            `json:"resourceShareArn,omitempty"`
	ResourceShareAssociations  []ResourceShareAssociation         `json:"resourceShareAssociations,omitempty"`
	ResourceShareInvitationArn *string                            `json:"resourceShareInvitationArn,omitempty"`
	ResourceShareName          *string                            `json:"resourceShareName,omitempty"`
	SenderAccountID            *string                            `json:"senderAccountId,omitempty"`
	Status                     *ResourceShareInvitationStatusEnum `json:"status,omitempty"`
}
