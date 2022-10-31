package shared



type CustomArtifactConfiguration struct {
    ArtifactType ArtifactTypeEnum `json:"ArtifactType"`
    MavenReference *MavenReference `json:"MavenReference,omitempty"`
    S3ContentLocation *S3ContentLocation `json:"S3ContentLocation,omitempty"`
    
}

