package shared

// ImagePermission
// Describes the AWS accounts that have been granted permission to use a shared image. For more information about sharing images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html"> Share or Unshare a Custom WorkSpaces Image</a>.
type ImagePermission struct {
	SharedAccountID *string `json:"SharedAccountId,omitempty"`
}
