package shared

type Api2ModelsLocation struct {
	City    *string `json:"City" form:"name=City"`
	Country *string `json:"Country" form:"name=Country"`
	Dma     *int32  `json:"DMA" form:"name=DMA"`
}
