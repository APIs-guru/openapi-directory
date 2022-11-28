package shared

// Payment
// Representation of an unpaid or paid payment. See [Payment timelines for AdSense](https://support.google.com/adsense/answer/7164703) for more information about payments and the [YouTube homepage and payments account](https://support.google.com/adsense/answer/11622510) article for information about dedicated payments accounts for YouTube.
type Payment struct {
	Amount *string `json:"amount,omitempty"`
	Date   *Date   `json:"date,omitempty"`
	Name   *string `json:"name,omitempty"`
}
