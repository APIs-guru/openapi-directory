package shared

// ShuffleConfig
// <p>A configuration for a shuffle option for input data in a channel. If you use <code>S3Prefix</code> for <code>S3DataType</code>, the results of the S3 key prefix matches are shuffled. If you use <code>ManifestFile</code>, the order of the S3 object references in the <code>ManifestFile</code> is shuffled. If you use <code>AugmentedManifestFile</code>, the order of the JSON lines in the <code>AugmentedManifestFile</code> is shuffled. The shuffling order is determined using the <code>Seed</code> value.</p> <p>For Pipe input mode, when <code>ShuffleConfig</code> is specified shuffling is done at the start of every epoch. With large datasets, this ensures that the order of the training data is different for each epoch, and it helps reduce bias and possible overfitting. In a multi-node training job when <code>ShuffleConfig</code> is combined with <code>S3DataDistributionType</code> of <code>ShardedByS3Key</code>, the data is shuffled across nodes so that the content sent to a particular node on the first epoch might be sent to a different node on the second epoch.</p>
type ShuffleConfig struct {
	Seed int64 `json:"Seed"`
}
