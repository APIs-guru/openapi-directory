package shared

// AddNoteRequestInput
// Request to add a note.
type AddNoteRequestInput struct {
	Note *NoteInput `json:"note,omitempty"`
}
