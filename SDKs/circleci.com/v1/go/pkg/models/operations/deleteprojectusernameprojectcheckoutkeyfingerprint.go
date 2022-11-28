package operations

type DeleteProjectUsernameProjectCheckoutKeyFingerprintPathParams struct {
	Fingerprint string `pathParam:"style=simple,explode=false,name=fingerprint"`
	Project     string `pathParam:"style=simple,explode=false,name=project"`
	Username    string `pathParam:"style=simple,explode=false,name=username"`
}

type DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJSONMessageEnum string

const (
	DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJSONMessageEnumOk DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJSONMessageEnum = "OK"
)

type DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJSON struct {
	Message *DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJSONMessageEnum `json:"message,omitempty"`
}

type DeleteProjectUsernameProjectCheckoutKeyFingerprintRequest struct {
	PathParams DeleteProjectUsernameProjectCheckoutKeyFingerprintPathParams
}

type DeleteProjectUsernameProjectCheckoutKeyFingerprintResponse struct {
	ContentType                                                                string
	DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJSONObject *DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJSON
	StatusCode                                                                 int64
}
