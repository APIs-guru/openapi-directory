package shared

type Timezone struct {
	DisplayString string `json:"display_string"`
	Offset        int32  `json:"offset"`
}
