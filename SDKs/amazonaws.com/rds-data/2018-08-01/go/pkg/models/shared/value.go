package shared

// Value
// <p>Contains the value of a column.</p> <pre><code> &lt;important&gt; &lt;p&gt;This data type is deprecated.&lt;/p&gt; &lt;/important&gt; </code></pre>
type Value struct {
	ArrayValues []Value      `json:"arrayValues,omitempty"`
	BigIntValue *int64       `json:"bigIntValue,omitempty"`
	BitValue    *bool        `json:"bitValue,omitempty"`
	BlobValue   *string      `json:"blobValue,omitempty"`
	DoubleValue *float64     `json:"doubleValue,omitempty"`
	IntValue    *int64       `json:"intValue,omitempty"`
	IsNull      *bool        `json:"isNull,omitempty"`
	RealValue   *float32     `json:"realValue,omitempty"`
	StringValue *string      `json:"stringValue,omitempty"`
	StructValue *StructValue `json:"structValue,omitempty"`
}
