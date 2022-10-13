package shared

type CustomSettings struct {
	CSS            *string `json:"css"`
	CSSLink        *string `json:"css_link"`
	Domain         *string `json:"domain"`
	HTMLFooter     *string `json:"html_footer"`
	HTMLNav        *string `json:"html_nav"`
	JavaScriptLink *string `json:"java_script_link"`
}
