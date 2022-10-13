package shared

import (
	"time"
)

type ResourceShareInvitation struct {
	InvitationTimestamp        *time.Time                         `json:"invitationTimestamp"`
	ReceiverAccountID          *string                            `json:"receiverAccountId"`
	ReceiverArn                *string                            `json:"receiverArn"`
	ResourceShareArn           *string                            `json:"resourceShareArn"`
	ResourceShareAssociations  []ResourceShareAssociation         `json:"resourceShareAssociations"`
	ResourceShareInvitationArn *string                            `json:"resourceShareInvitationArn"`
	ResourceShareName          *string                            `json:"resourceShareName"`
	SenderAccountID            *string                            `json:"senderAccountId"`
	Status                     *ResourceShareInvitationStatusEnum `json:"status"`
}
