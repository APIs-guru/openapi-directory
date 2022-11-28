package shared

// HTTPRequest
// <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The response from a <a>GetSampledRequests</a> request includes an <code>HTTPRequest</code> complex type that appears as <code>Request</code> in the response syntax. <code>HTTPRequest</code> contains information about one of the web requests that were returned by <code>GetSampledRequests</code>. </p>
type HTTPRequest struct {
	ClientIP    *string      `json:"ClientIP,omitempty"`
	Country     *string      `json:"Country,omitempty"`
	HTTPVersion *string      `json:"HTTPVersion,omitempty"`
	Headers     []HTTPHeader `json:"Headers,omitempty"`
	Method      *string      `json:"Method,omitempty"`
	URI         *string      `json:"URI,omitempty"`
}
