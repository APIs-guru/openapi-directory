package shared

type Shard struct {
	Name          *string `json:"Name"`
	Nodes         []Node  `json:"Nodes"`
	NumberOfNodes *int64  `json:"NumberOfNodes"`
	Slots         *string `json:"Slots"`
	Status        *string `json:"Status"`
}
