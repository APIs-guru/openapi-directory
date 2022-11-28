package shared

// InputOrigin
// <p>Describes the origin resource of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>An origin can be a Lightsail instance or load balancer. A distribution pulls content from an origin, caches it, and serves it to viewers via a worldwide network of edge servers.</p>
type InputOrigin struct {
	Name           *string                       `json:"name,omitempty"`
	ProtocolPolicy *OriginProtocolPolicyEnumEnum `json:"protocolPolicy,omitempty"`
	RegionName     *RegionNameEnum               `json:"regionName,omitempty"`
}
