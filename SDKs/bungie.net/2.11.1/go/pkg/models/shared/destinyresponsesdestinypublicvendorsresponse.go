package shared

// DestinyResponsesDestinyPublicVendorsResponseCategories
// Categories that the vendor has available, and references to the sales therein. These are keyed by the Vendor Hash, so you will get one Categories Component per vendor returned.
// COMPONENT TYPE: VendorCategories
type DestinyResponsesDestinyPublicVendorsResponseCategories struct {
	Data     map[string]DestinyEntitiesVendorsDestinyVendorCategoriesComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyPublicVendorsResponseSales
// Sales, keyed by the vendorItemIndex of the item being sold. These are keyed by the Vendor Hash, so you will get one Sale Item Set Component per vendor returned.
// Note that within the Sale Item Set component, the sales are themselves keyed by the vendorSaleIndex, so you can relate it to the corrent sale item definition within the Vendor's definition.
// COMPONENT TYPE: VendorSales
type DestinyResponsesDestinyPublicVendorsResponseSales struct {
	Data     map[string]DestinyResponsesPublicDestinyVendorSaleItemSetComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyPublicVendorsResponseStringVariables
// A set of string variable values by hash for a public vendors context.
// COMPONENT TYPE: StringVariables
type DestinyResponsesDestinyPublicVendorsResponseStringVariables struct {
	Data     *DestinyComponentsStringVariablesDestinyStringVariablesComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyPublicVendorsResponseVendorGroups
// For Vendors being returned, this will give you the information you need to group them and order them in the same way that the Bungie Companion app performs grouping. It will automatically be returned if you request the Vendors component.
// COMPONENT TYPE: Vendors
type DestinyResponsesDestinyPublicVendorsResponseVendorGroups struct {
	Data     *DestinyComponentsVendorsDestinyVendorGroupComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyPublicVendorsResponseVendors
// The base properties of the vendor. These are keyed by the Vendor Hash, so you will get one Vendor Component per vendor returned.
// COMPONENT TYPE: Vendors
type DestinyResponsesDestinyPublicVendorsResponseVendors struct {
	Data     map[string]DestinyComponentsVendorsDestinyPublicVendorComponent
	Disabled *bool
	Privacy  *int32
}

// DestinyResponsesDestinyPublicVendorsResponse
// A response containing all valid components for the public Vendors endpoint.
//
//	It is a decisively smaller subset of data compared to what we can get when we know the specific user making the request.
//	If you want any of the other data - item details, whether or not you can buy it, etc... you'll have to call in the context of a character. I know, sad but true.
type DestinyResponsesDestinyPublicVendorsResponse struct {
	Categories      *DestinyResponsesDestinyPublicVendorsResponseCategories
	Sales           *DestinyResponsesDestinyPublicVendorsResponseSales
	StringVariables *DestinyResponsesDestinyPublicVendorsResponseStringVariables
	VendorGroups    *DestinyResponsesDestinyPublicVendorsResponseVendorGroups
	Vendors         *DestinyResponsesDestinyPublicVendorsResponseVendors
}
