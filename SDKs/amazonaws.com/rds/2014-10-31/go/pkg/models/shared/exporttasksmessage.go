package shared

type ExportTasksMessage struct {
	ExportTasks []ExportTask
	Marker      *string
}
