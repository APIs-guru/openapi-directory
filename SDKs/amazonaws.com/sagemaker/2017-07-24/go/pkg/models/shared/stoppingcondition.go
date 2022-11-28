package shared

// StoppingCondition
// <p>Specifies a limit to how long a model training job, model compilation job, or hyperparameter tuning job can run. It also specifies how long a managed Spot training job has to complete. When the job reaches the time limit, Amazon SageMaker ends the training or compilation job. Use this API to cap model training costs.</p> <p>To stop a training job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost. </p> <p>The training algorithms provided by Amazon SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with <code>CreateModel</code>.</p> <note> <p>The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.</p> </note>
type StoppingCondition struct {
	MaxRuntimeInSeconds  *int64 `json:"MaxRuntimeInSeconds,omitempty"`
	MaxWaitTimeInSeconds *int64 `json:"MaxWaitTimeInSeconds,omitempty"`
}
