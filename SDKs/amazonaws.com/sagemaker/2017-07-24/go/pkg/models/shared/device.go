package shared

type Device struct {
	Description  *string `json:"Description"`
	DeviceName   string  `json:"DeviceName"`
	IotThingName *string `json:"IotThingName"`
}
