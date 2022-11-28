package shared

// User
// Represents user metadata added to a Users dataset using the <code>PutUsers</code> API. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-users.html">Importing Users Incrementally</a>.
type User struct {
	Properties *interface{} `json:"properties,omitempty"`
	UserID     string       `json:"userId"`
}
