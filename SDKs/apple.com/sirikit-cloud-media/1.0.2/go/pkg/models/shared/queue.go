package shared

type Queue struct {
	Content            []Content                   `json:"content"`
	ContentItemsCount  *int64                      `json:"contentItemsCount"`
	Controls           map[string]PlayMediaControl `json:"controls"`
	Identifier         string                      `json:"identifier"`
	InsertPointer      *interface{}                `json:"insertPointer"`
	NextContentURL     *string                     `json:"nextContentUrl"`
	PlayPointer        *QueuePlayPointer           `json:"playPointer"`
	PrerollSeconds     *float64                    `json:"prerollSeconds"`
	PreviousContentURL *string                     `json:"previousContentUrl"`
	SkipsRemaining     *int64                      `json:"skipsRemaining"`
	Version            string                      `json:"version"`
}
