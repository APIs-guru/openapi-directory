package shared

// DestinyResponsesDestinyVendorResponseCategories
// Categories that the vendor has available, and references to the sales therein.
// COMPONENT TYPE: VendorCategories
type DestinyResponsesDestinyVendorResponseCategories struct {
	Data     *DestinyEntitiesVendorsDestinyVendorCategoriesComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyVendorResponseCurrencyLookups
// A "lookup" convenience component that can be used to quickly check if the character has access to items that can be used for purchasing.
// COMPONENT TYPE: CurrencyLookups
type DestinyResponsesDestinyVendorResponseCurrencyLookups struct {
	Data     *DestinyComponentsInventoryDestinyCurrenciesComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyVendorResponseItemComponents
// Item components, keyed by the vendorItemIndex of the active sale items.
// COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
type DestinyResponsesDestinyVendorResponseItemComponents struct {
	Instances      *DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent
	Objectives     *DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent
	Perks          *DictionaryComponentResponseOfint32AndDestinyItemPerksComponent
	PlugObjectives *DictionaryComponentResponseOfint32AndDestinyItemPlugObjectivesComponent
	PlugStates     *DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent
	RenderData     *DictionaryComponentResponseOfint32AndDestinyItemRenderComponent
	ReusablePlugs  *DictionaryComponentResponseOfint32AndDestinyItemReusablePlugsComponent
	Sockets        *DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent
	Stats          *DictionaryComponentResponseOfint32AndDestinyItemStatsComponent
	TalentGrids    *DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent
}

// DestinyResponsesDestinyVendorResponseSales
// Sales, keyed by the vendorItemIndex of the item being sold.
// COMPONENT TYPE: VendorSales
type DestinyResponsesDestinyVendorResponseSales struct {
	Data     map[string]DestinyEntitiesVendorsDestinyVendorSaleItemComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyVendorResponseStringVariables
// A map of string variable values by hash for this character context.
// COMPONENT TYPE: StringVariables
type DestinyResponsesDestinyVendorResponseStringVariables struct {
	Data     *DestinyComponentsStringVariablesDestinyStringVariablesComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyVendorResponseVendor
// The base properties of the vendor.
// COMPONENT TYPE: Vendors
type DestinyResponsesDestinyVendorResponseVendor struct {
	Data     *DestinyEntitiesVendorsDestinyVendorComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyVendorResponse
// A response containing all of the components for a vendor.
type DestinyResponsesDestinyVendorResponse struct {
	Categories      *DestinyResponsesDestinyVendorResponseCategories
	CurrencyLookups *DestinyResponsesDestinyVendorResponseCurrencyLookups
	ItemComponents  *DestinyResponsesDestinyVendorResponseItemComponents
	Sales           *DestinyResponsesDestinyVendorResponseSales
	StringVariables *DestinyResponsesDestinyVendorResponseStringVariables
	Vendor          *DestinyResponsesDestinyVendorResponseVendor
}
