package shared

// DocumentLocation
// <p>The Amazon S3 bucket that contains the document to be processed. It's used by asynchronous operations such as <a>StartDocumentTextDetection</a>.</p> <p>The input document can be an image file in JPEG or PNG format. It can also be a file in PDF format.</p>
type DocumentLocation struct {
	S3Object *S3Object `json:"S3Object,omitempty"`
}
