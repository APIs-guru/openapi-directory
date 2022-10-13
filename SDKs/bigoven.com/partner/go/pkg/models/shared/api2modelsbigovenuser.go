package shared

type Api2ModelsBigOvenUser struct {
	Accounting      *Api2ModelsAccounting `json:"Accounting" form:"name=Accounting"`
	BoAuthToken     *string               `json:"BOAuthToken" form:"name=BOAuthToken"`
	LastChangeLogID *string               `json:"LastChangeLogID" form:"name=LastChangeLogID"`
	Personal        *Api2ModelsPersonal   `json:"Personal" form:"name=Personal"`
	Preferences     *Api2ModelsPreference `json:"Preferences" form:"name=Preferences"`
	Profile         *Api2ModelsProfile    `json:"Profile" form:"name=Profile"`
}
