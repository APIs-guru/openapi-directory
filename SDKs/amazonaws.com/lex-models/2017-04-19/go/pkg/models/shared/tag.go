package shared

// Tag
// A list of key/value pairs that identify a bot, bot alias, or bot channel. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
type Tag struct {
	Key   string `json:"key"`
	Value string `json:"value"`
}
