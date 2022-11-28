package shared

// BlobStoreTransport
// Moves results to a Azure Blob Store. Typcially used for HHS Protect interfaces.
type BlobStoreTransport struct {
	ContainerName string `json:"containerName"`
	StorageName   string `json:"storageName"`
	Type          string `json:"type"`
}
