package shared

// SnapshotCopyGrant
// <p>The snapshot copy grant that grants Amazon Redshift permission to encrypt copied snapshots with the specified customer master key (CMK) from Amazon Web Services KMS in the destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
type SnapshotCopyGrant struct {
	KmsKeyID              *string
	SnapshotCopyGrantName *string
	Tags                  []Tag
}
