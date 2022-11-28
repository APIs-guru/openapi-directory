package shared

// DbSnapshotAttribute
// <p>Contains the name and values of a manual DB snapshot attribute</p> <p>Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code> API.</p>
type DbSnapshotAttribute struct {
	AttributeName   *string
	AttributeValues []string
}
