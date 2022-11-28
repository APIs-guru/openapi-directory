package shared

// SQLStatementResult
// <p>The result of a SQL statement.</p> <pre><code> &lt;important&gt; &lt;p&gt;This data type is deprecated.&lt;/p&gt; &lt;/important&gt; </code></pre>
type SQLStatementResult struct {
	NumberOfRecordsUpdated *int64       `json:"numberOfRecordsUpdated,omitempty"`
	ResultFrame            *ResultFrame `json:"resultFrame,omitempty"`
}
