package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSimulationJobHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateSimulationJobRequestBodyCompute struct {
	SimulationUnitLimit *int64 `json:"simulationUnitLimit"`
}

type CreateSimulationJobRequestBodyFailureBehaviorEnum string

const (
	CreateSimulationJobRequestBodyFailureBehaviorEnumFail     CreateSimulationJobRequestBodyFailureBehaviorEnum = "Fail"
	CreateSimulationJobRequestBodyFailureBehaviorEnumContinue CreateSimulationJobRequestBodyFailureBehaviorEnum = "Continue"
)

type CreateSimulationJobRequestBodyLoggingConfig struct {
	RecordAllRosTopics *bool `json:"recordAllRosTopics"`
}

type CreateSimulationJobRequestBodyOutputLocation struct {
	S3Bucket *string `json:"s3Bucket"`
	S3Prefix *string `json:"s3Prefix"`
}

type CreateSimulationJobRequestBodyVpcConfig struct {
	AssignPublicIP *bool    `json:"assignPublicIp"`
	SecurityGroups []string `json:"securityGroups"`
	Subnets        []string `json:"subnets"`
}

type CreateSimulationJobRequestBody struct {
	ClientRequestToken      *string                                            `json:"clientRequestToken"`
	Compute                 *CreateSimulationJobRequestBodyCompute             `json:"compute"`
	DataSources             []shared.DataSourceConfig                          `json:"dataSources"`
	FailureBehavior         *CreateSimulationJobRequestBodyFailureBehaviorEnum `json:"failureBehavior"`
	IamRole                 string                                             `json:"iamRole"`
	LoggingConfig           *CreateSimulationJobRequestBodyLoggingConfig       `json:"loggingConfig"`
	MaxJobDurationInSeconds int64                                              `json:"maxJobDurationInSeconds"`
	OutputLocation          *CreateSimulationJobRequestBodyOutputLocation      `json:"outputLocation"`
	RobotApplications       []shared.RobotApplicationConfig                    `json:"robotApplications"`
	SimulationApplications  []shared.SimulationApplicationConfig               `json:"simulationApplications"`
	Tags                    map[string]string                                  `json:"tags"`
	VpcConfig               *CreateSimulationJobRequestBodyVpcConfig           `json:"vpcConfig"`
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
