package shared

// CodeSigningPolicies
// Code signing configuration <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies">policies</a> specify the validation failure action for signature mismatch or expiry.
type CodeSigningPolicies struct {
	UntrustedArtifactOnDeployment *CodeSigningPolicyEnum `json:"UntrustedArtifactOnDeployment,omitempty"`
}
