package shared

type HandshakeStateEnum string

const (
	HandshakeStateEnumRequested HandshakeStateEnum = "REQUESTED"
	HandshakeStateEnumOpen      HandshakeStateEnum = "OPEN"
	HandshakeStateEnumCanceled  HandshakeStateEnum = "CANCELED"
	HandshakeStateEnumAccepted  HandshakeStateEnum = "ACCEPTED"
	HandshakeStateEnumDeclined  HandshakeStateEnum = "DECLINED"
	HandshakeStateEnumExpired   HandshakeStateEnum = "EXPIRED"
)
