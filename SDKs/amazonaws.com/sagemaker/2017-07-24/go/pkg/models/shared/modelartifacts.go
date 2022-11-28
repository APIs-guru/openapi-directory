package shared

// ModelArtifacts
// <p>Provides information about the location that is configured for storing model artifacts. </p> <p>Model artifacts are the output that results from training a model, and typically consist of trained parameters, a model defintion that describes how to compute inferences, and other metadata.</p>
type ModelArtifacts struct {
	S3ModelArtifacts string `json:"S3ModelArtifacts"`
}
