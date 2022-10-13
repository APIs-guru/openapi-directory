package shared

type XSSMatchSetUpdate struct {
	Action        ChangeActionEnum `json:"Action"`
	XSSMatchTuple XSSMatchTuple    `json:"XssMatchTuple"`
}
