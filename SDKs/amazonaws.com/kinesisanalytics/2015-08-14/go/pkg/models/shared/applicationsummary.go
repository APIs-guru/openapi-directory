package shared

// ApplicationSummary
// <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.</p>
type ApplicationSummary struct {
	ApplicationArn    string                `json:"ApplicationARN"`
	ApplicationName   string                `json:"ApplicationName"`
	ApplicationStatus ApplicationStatusEnum `json:"ApplicationStatus"`
}
