package shared

// DkimAttributes
// <p>An object that contains information about the DKIM authentication status for an email identity.</p> <p>Amazon SES determines the authentication status by searching for specific records in the DNS configuration for the domain. If you used <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a> to set up DKIM authentication, Amazon SES tries to find three unique CNAME records in the DNS configuration for your domain. If you provided a public key to perform DKIM authentication, Amazon SES tries to find a TXT record that uses the selector that you specified. The value of the TXT record must be a public key that's paired with the private key that you specified in the process of creating the identity</p>
type DkimAttributes struct {
	SigningAttributesOrigin *DkimSigningAttributesOriginEnum `json:"SigningAttributesOrigin,omitempty"`
	SigningEnabled          *bool                            `json:"SigningEnabled,omitempty"`
	Status                  *DkimStatusEnum                  `json:"Status,omitempty"`
	Tokens                  []string                         `json:"Tokens,omitempty"`
}
