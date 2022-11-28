package shared

// DestinyResponsesDestinyVendorsResponseCategories
// Categories that the vendor has available, and references to the sales therein. These are keyed by the Vendor Hash, so you will get one Categories Component per vendor returned.
// COMPONENT TYPE: VendorCategories
type DestinyResponsesDestinyVendorsResponseCategories struct {
	Data     map[string]DestinyEntitiesVendorsDestinyVendorCategoriesComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyVendorsResponseCurrencyLookups
// A "lookup" convenience component that can be used to quickly check if the character has access to items that can be used for purchasing.
// COMPONENT TYPE: CurrencyLookups
type DestinyResponsesDestinyVendorsResponseCurrencyLookups struct {
	Data     *DestinyComponentsInventoryDestinyCurrenciesComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyVendorsResponseSales
// Sales, keyed by the vendorItemIndex of the item being sold. These are keyed by the Vendor Hash, so you will get one Sale Item Set Component per vendor returned.
// Note that within the Sale Item Set component, the sales are themselves keyed by the vendorSaleIndex, so you can relate it to the corrent sale item definition within the Vendor's definition.
// COMPONENT TYPE: VendorSales
type DestinyResponsesDestinyVendorsResponseSales struct {
	Data     map[string]DestinyResponsesPersonalDestinyVendorSaleItemSetComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyVendorsResponseStringVariables
// A map of string variable values by hash for this character context.
// COMPONENT TYPE: StringVariables
type DestinyResponsesDestinyVendorsResponseStringVariables struct {
	Data     *DestinyComponentsStringVariablesDestinyStringVariablesComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyVendorsResponseVendorGroups
// For Vendors being returned, this will give you the information you need to group them and order them in the same way that the Bungie Companion app performs grouping. It will automatically be returned if you request the Vendors component.
// COMPONENT TYPE: Vendors
type DestinyResponsesDestinyVendorsResponseVendorGroups struct {
	Data     *DestinyComponentsVendorsDestinyVendorGroupComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyVendorsResponseVendors
// The base properties of the vendor. These are keyed by the Vendor Hash, so you will get one Vendor Component per vendor returned.
// COMPONENT TYPE: Vendors
type DestinyResponsesDestinyVendorsResponseVendors struct {
	Data     map[string]DestinyEntitiesVendorsDestinyVendorComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyVendorsResponse
// A response containing all of the components for all requested vendors.
type DestinyResponsesDestinyVendorsResponse struct {
	Categories      *DestinyResponsesDestinyVendorsResponseCategories
	CurrencyLookups *DestinyResponsesDestinyVendorsResponseCurrencyLookups
	ItemComponents  map[string]DestinyItemComponentSetOfint32
	Sales           *DestinyResponsesDestinyVendorsResponseSales
	StringVariables *DestinyResponsesDestinyVendorsResponseStringVariables
	VendorGroups    *DestinyResponsesDestinyVendorsResponseVendorGroups
	Vendors         *DestinyResponsesDestinyVendorsResponseVendors
}
