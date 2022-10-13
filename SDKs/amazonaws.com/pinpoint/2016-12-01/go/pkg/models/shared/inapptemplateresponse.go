package shared

type InAppTemplateResponse struct {
	Arn                 *string               `json:"Arn"`
	Content             []InAppMessageContent `json:"Content"`
	CreationDate        string                `json:"CreationDate"`
	CustomConfig        map[string]string     `json:"CustomConfig"`
	LastModifiedDate    string                `json:"LastModifiedDate"`
	Layout              *LayoutEnum           `json:"Layout"`
	TemplateDescription *string               `json:"TemplateDescription"`
	TemplateName        string                `json:"TemplateName"`
	TemplateType        TemplateTypeEnum      `json:"TemplateType"`
	Version             *string               `json:"Version"`
	Tags                map[string]string     `json:"tags"`
}
