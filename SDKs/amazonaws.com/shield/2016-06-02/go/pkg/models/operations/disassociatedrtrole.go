package operations

type DisassociateDrtRoleXAmzTargetEnum string

const (
	DisassociateDrtRoleXAmzTargetEnumAwsShield20160616DisassociateDrtRole DisassociateDrtRoleXAmzTargetEnum = "AWSShield_20160616.DisassociateDRTRole"
)

type DisassociateDrtRoleHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateDrtRoleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisassociateDrtRoleRequest struct {
	Headers DisassociateDrtRoleHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type DisassociateDrtRoleResponse struct {
	ContentType                 string
	DisassociateDrtRoleResponse map[string]interface{}
	InternalErrorException      *interface{}
	InvalidOperationException   *interface{}
	OptimisticLockException     *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
}
