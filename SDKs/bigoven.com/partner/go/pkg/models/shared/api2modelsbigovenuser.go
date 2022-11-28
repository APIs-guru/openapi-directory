package shared

// Api2ModelsBigOvenUser
// An API2 wrapper object for a user
type Api2ModelsBigOvenUser struct {
	Accounting      *Api2ModelsAccounting `json:"Accounting,omitempty" form:"name=Accounting"`
	BoAuthToken     *string               `json:"BOAuthToken,omitempty" form:"name=BOAuthToken"`
	LastChangeLogID *string               `json:"LastChangeLogID,omitempty" form:"name=LastChangeLogID"`
	Personal        *Api2ModelsPersonal   `json:"Personal,omitempty" form:"name=Personal"`
	Preferences     *Api2ModelsPreference `json:"Preferences,omitempty" form:"name=Preferences"`
	Profile         *Api2ModelsProfile    `json:"Profile,omitempty" form:"name=Profile"`
}
