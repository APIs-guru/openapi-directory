package shared

type UpdateLoadBalancerAttributeRequest struct {
	AttributeName    LoadBalancerAttributeNameEnum `json:"attributeName"`
	AttributeValue   string                        `json:"attributeValue"`
	LoadBalancerName string                        `json:"loadBalancerName"`
}
