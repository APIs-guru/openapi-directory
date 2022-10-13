package shared

type SecondaryStatusEnum string

const (
	SecondaryStatusEnumStarting                 SecondaryStatusEnum = "Starting"
	SecondaryStatusEnumLaunchingMlInstances     SecondaryStatusEnum = "LaunchingMLInstances"
	SecondaryStatusEnumPreparingTrainingStack   SecondaryStatusEnum = "PreparingTrainingStack"
	SecondaryStatusEnumDownloading              SecondaryStatusEnum = "Downloading"
	SecondaryStatusEnumDownloadingTrainingImage SecondaryStatusEnum = "DownloadingTrainingImage"
	SecondaryStatusEnumTraining                 SecondaryStatusEnum = "Training"
	SecondaryStatusEnumUploading                SecondaryStatusEnum = "Uploading"
	SecondaryStatusEnumStopping                 SecondaryStatusEnum = "Stopping"
	SecondaryStatusEnumStopped                  SecondaryStatusEnum = "Stopped"
	SecondaryStatusEnumMaxRuntimeExceeded       SecondaryStatusEnum = "MaxRuntimeExceeded"
	SecondaryStatusEnumCompleted                SecondaryStatusEnum = "Completed"
	SecondaryStatusEnumFailed                   SecondaryStatusEnum = "Failed"
	SecondaryStatusEnumInterrupted              SecondaryStatusEnum = "Interrupted"
	SecondaryStatusEnumMaxWaitTimeExceeded      SecondaryStatusEnum = "MaxWaitTimeExceeded"
	SecondaryStatusEnumUpdating                 SecondaryStatusEnum = "Updating"
	SecondaryStatusEnumRestarting               SecondaryStatusEnum = "Restarting"
)
