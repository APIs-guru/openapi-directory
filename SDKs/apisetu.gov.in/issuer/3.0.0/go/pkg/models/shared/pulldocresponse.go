package shared

// PullDocResponseDocDetails
// Issuer can add meta content specific to document here.
type PullDocResponseDocDetails struct {
	DataContent string
	DocContent  string
}

type PullDocResponseResponseStatus struct {
	Status string
	Ts     string
	Txn    string
}

type PullDocResponse struct {
	DocDetails     PullDocResponseDocDetails
	ResponseStatus PullDocResponseResponseStatus
}
