package shared

type BucketCountByEffectivePermission struct {
	PubliclyAccessible *int64 `json:"publiclyAccessible"`
	PubliclyReadable   *int64 `json:"publiclyReadable"`
	PubliclyWritable   *int64 `json:"publiclyWritable"`
	Unknown            *int64 `json:"unknown"`
}
