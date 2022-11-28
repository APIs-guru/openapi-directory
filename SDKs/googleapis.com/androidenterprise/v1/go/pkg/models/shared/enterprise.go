package shared

// Enterprise
// An Enterprises resource represents the binding between an EMM and a specific organization. That binding can be instantiated in one of two different ways using this API as follows: - For Google managed domain customers, the process involves using Enterprises.enroll and Enterprises.setAccount (in conjunction with artifacts obtained from the Admin console and the Google API Console) and submitted to the EMM through a more-or-less manual process. - For managed Google Play Accounts customers, the process involves using Enterprises.generateSignupUrl and Enterprises.completeSignup in conjunction with the managed Google Play sign-up UI (Google-provided mechanism) to create the binding without manual steps. As an EMM, you can support either or both approaches in your EMM console. See Create an Enterprise for details.
type Enterprise struct {
	Administrator []Administrator `json:"administrator,omitempty"`
	ID            *string         `json:"id,omitempty"`
	Name          *string         `json:"name,omitempty"`
	PrimaryDomain *string         `json:"primaryDomain,omitempty"`
}
