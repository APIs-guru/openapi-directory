package shared

import (
	"time"
)

// SecondaryStatusTransition
// <p>An array element of <a>DescribeTrainingJobResponse$SecondaryStatusTransitions</a>. It provides additional details about a status that the training job has transitioned through. A training job can be in one of several states, for example, starting, downloading, training, or uploading. Within each state, there are a number of intermediate states. For example, within the starting state, Amazon SageMaker could be starting the training job or launching the ML instances. These transitional states are referred to as the job's secondary status. </p> <p/>
type SecondaryStatusTransition struct {
	EndTime       *time.Time          `json:"EndTime,omitempty"`
	StartTime     time.Time           `json:"StartTime"`
	Status        SecondaryStatusEnum `json:"Status"`
	StatusMessage *string             `json:"StatusMessage,omitempty"`
}
