package shared



type Api2ModelsBigOvenUser struct {
    Accounting *Api2ModelsAccounting `json:"Accounting,omitempty" form:"name=Accounting"`
    BoAuthToken *string `json:"BOAuthToken,omitempty" form:"name=BOAuthToken"`
    LastChangeLogID *string `json:"LastChangeLogID,omitempty" form:"name=LastChangeLogID"`
    Personal *Api2ModelsPersonal `json:"Personal,omitempty" form:"name=Personal"`
    Preferences *Api2ModelsPreference `json:"Preferences,omitempty" form:"name=Preferences"`
    Profile *Api2ModelsProfile `json:"Profile,omitempty" form:"name=Profile"`
    
}

