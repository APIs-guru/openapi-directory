package operations

type DeleteQueuedSavingsPlanHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteQueuedSavingsPlanRequestBody struct {
	SavingsPlanID string `json:"savingsPlanId"`
}

type DeleteQueuedSavingsPlanRequest struct {
	Headers DeleteQueuedSavingsPlanHeaders
	Request DeleteQueuedSavingsPlanRequestBody `request:"mediaType=application/json"`
}

type DeleteQueuedSavingsPlanResponse struct {
	ContentType                     string
	DeleteQueuedSavingsPlanResponse map[string]interface{}
	InternalServerException         *interface{}
	ResourceNotFoundException       *interface{}
	ServiceQuotaExceededException   *interface{}
	StatusCode                      int64
	ValidationException             *interface{}
}
