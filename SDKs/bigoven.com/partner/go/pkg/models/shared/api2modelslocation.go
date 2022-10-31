package shared



type Api2ModelsLocation struct {
    City *string `json:"City,omitempty" form:"name=City"`
    Country *string `json:"Country,omitempty" form:"name=Country"`
    Dma *int32 `json:"DMA,omitempty" form:"name=DMA"`
    
}

