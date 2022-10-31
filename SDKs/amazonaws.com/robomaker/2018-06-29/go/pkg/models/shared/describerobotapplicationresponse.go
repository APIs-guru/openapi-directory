package shared

import (
"time")

type DescribeRobotApplicationResponse struct {
    Arn *string `json:"arn,omitempty"`
    Environment *Environment `json:"environment,omitempty"`
    ImageDigest *string `json:"imageDigest,omitempty"`
    LastUpdatedAt *time.Time `json:"lastUpdatedAt,omitempty"`
    Name *string `json:"name,omitempty"`
    RevisionID *string `json:"revisionId,omitempty"`
    RobotSoftwareSuite *RobotSoftwareSuite `json:"robotSoftwareSuite,omitempty"`
    Sources []Source `json:"sources,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

