package shared

// ChunkUploadResponse
// Chunk upload response
type ChunkUploadResponse struct {
	Hash string `json:"hash"`
	Size int64  `json:"size"`
}
