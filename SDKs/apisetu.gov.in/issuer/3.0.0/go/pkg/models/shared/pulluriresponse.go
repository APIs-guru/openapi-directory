package shared

// PullURIResponseDocDetails
// Issuer can add meta content specific to document here.
type PullURIResponseDocDetails struct {
	Dob          string
	DataContent  string
	DigiLockerID string
	DocContent   string
	DocType      string
	FullName     string
	Udf1         string
	Udf2         string
	UID          string
	URI          string
}

type PullURIResponseResponseStatus struct {
	Status string
	Ts     string
	Txn    string
}

type PullURIResponse struct {
	DocDetails     PullURIResponseDocDetails
	ResponseStatus PullURIResponseResponseStatus
}
