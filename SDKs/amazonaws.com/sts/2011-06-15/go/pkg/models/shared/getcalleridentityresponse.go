package shared

// GetCallerIdentityResponse
// Contains the response to a successful <a>GetCallerIdentity</a> request, including information about the entity making the request.
type GetCallerIdentityResponse struct {
	Account *string
	Arn     *string
	UserID  *string
}
