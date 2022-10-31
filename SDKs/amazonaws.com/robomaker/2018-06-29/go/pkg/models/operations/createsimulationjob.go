package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSimulationJobHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateSimulationJobRequestBodyCompute struct {
	SimulationUnitLimit *int64 `json:"simulationUnitLimit,omitempty"`
}

type CreateSimulationJobRequestBodyFailureBehaviorEnum string

const (
	CreateSimulationJobRequestBodyFailureBehaviorEnumFail     CreateSimulationJobRequestBodyFailureBehaviorEnum = "Fail"
	CreateSimulationJobRequestBodyFailureBehaviorEnumContinue CreateSimulationJobRequestBodyFailureBehaviorEnum = "Continue"
)

type CreateSimulationJobRequestBodyLoggingConfig struct {
	RecordAllRosTopics *bool `json:"recordAllRosTopics,omitempty"`
}

type CreateSimulationJobRequestBodyOutputLocation struct {
	S3Bucket *string `json:"s3Bucket,omitempty"`
	S3Prefix *string `json:"s3Prefix,omitempty"`
}

type CreateSimulationJobRequestBodyVpcConfig struct {
	AssignPublicIP *bool    `json:"assignPublicIp,omitempty"`
	SecurityGroups []string `json:"securityGroups,omitempty"`
	Subnets        []string `json:"subnets,omitempty"`
}

type CreateSimulationJobRequestBody struct {
	ClientRequestToken      *string                                            `json:"clientRequestToken,omitempty"`
	Compute                 *CreateSimulationJobRequestBodyCompute             `json:"compute,omitempty"`
	DataSources             []shared.DataSourceConfig                          `json:"dataSources,omitempty"`
	FailureBehavior         *CreateSimulationJobRequestBodyFailureBehaviorEnum `json:"failureBehavior,omitempty"`
	IamRole                 string                                             `json:"iamRole"`
	LoggingConfig           *CreateSimulationJobRequestBodyLoggingConfig       `json:"loggingConfig,omitempty"`
	MaxJobDurationInSeconds int64                                              `json:"maxJobDurationInSeconds"`
	OutputLocation          *CreateSimulationJobRequestBodyOutputLocation      `json:"outputLocation,omitempty"`
	RobotApplications       []shared.RobotApplicationConfig                    `json:"robotApplications,omitempty"`
	SimulationApplications  []shared.SimulationApplicationConfig               `json:"simulationApplications,omitempty"`
	Tags                    map[string]string                                  `json:"tags,omitempty"`
	VpcConfig               *CreateSimulationJobRequestBodyVpcConfig           `json:"vpcConfig,omitempty"`
}

type CreateSimulationJobRequest struct {
	Headers CreateSimulationJobHeaders
	Request CreateSimulationJobRequestBody `request:"mediaType=application/json"`
}

type CreateSimulationJobResponse struct {
	ContentType                          string
	CreateSimulationJobResponse          *shared.CreateSimulationJobResponse
	IdempotentParameterMismatchException *interface{}
	InternalServerException              *interface{}
	InvalidParameterException            *interface{}
	LimitExceededException               *interface{}
	ResourceNotFoundException            *interface{}
	ServiceUnavailableException          *interface{}
	StatusCode                           int64
	ThrottlingException                  *interface{}
}
