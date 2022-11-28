package shared

// AddNoteRequestInput
// Request message for adding a note to a given proposal.
type AddNoteRequestInput struct {
	Note *NoteInput `json:"note,omitempty"`
}
