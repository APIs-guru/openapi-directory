package shared

type LogOperation struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

type LogService struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

type LogUnifiedAPIEnum string

const (
	LogUnifiedAPIEnumCrm         LogUnifiedAPIEnum = "crm"
	LogUnifiedAPIEnumLead        LogUnifiedAPIEnum = "lead"
	LogUnifiedAPIEnumProxy       LogUnifiedAPIEnum = "proxy"
	LogUnifiedAPIEnumVault       LogUnifiedAPIEnum = "vault"
	LogUnifiedAPIEnumAccounting  LogUnifiedAPIEnum = "accounting"
	LogUnifiedAPIEnumHris        LogUnifiedAPIEnum = "hris"
	LogUnifiedAPIEnumAts         LogUnifiedAPIEnum = "ats"
	LogUnifiedAPIEnumPos         LogUnifiedAPIEnum = "pos"
	LogUnifiedAPIEnumFileStorage LogUnifiedAPIEnum = "file-storage"
	LogUnifiedAPIEnumSms         LogUnifiedAPIEnum = "sms"
)

type Log struct {
	APIStyle     string            `json:"api_style"`
	BaseURL      string            `json:"base_url"`
	ChildRequest bool              `json:"child_request"`
	ConsumerID   string            `json:"consumer_id"`
	Duration     float64           `json:"duration"`
	ErrorMessage *string           `json:"error_message"`
	Execution    int64             `json:"execution"`
	HasChildren  bool              `json:"has_children"`
	HTTPMethod   string            `json:"http_method"`
	ID           string            `json:"id"`
	Latency      float64           `json:"latency"`
	Operation    LogOperation      `json:"operation"`
	ParentID     string            `json:"parent_id"`
	Path         string            `json:"path"`
	Sandbox      bool              `json:"sandbox"`
	Service      LogService        `json:"service"`
	SourceIP     *string           `json:"source_ip"`
	StatusCode   int64             `json:"status_code"`
	Success      bool              `json:"success"`
	Timestamp    string            `json:"timestamp"`
	UnifiedAPI   LogUnifiedAPIEnum `json:"unified_api"`
}
