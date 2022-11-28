package shared

// DestinyComponentsKiosksDestinyKiosksComponent
// A Kiosk is a Vendor (DestinyVendorDefinition) that sells items based on whether you have already acquired that item before.
// This component returns information about what Kiosk items are available to you on a *Profile* level. It is theoretically possible for Kiosks to have items gated by specific Character as well. If you ever have those, you will find them on the individual character's DestinyCharacterKiosksComponent.
// Note that, because this component returns vendorItemIndexes (that is to say, indexes into the Kiosk Vendor's itemList property), these results are necessarily content version dependent. Make sure that you have the latest version of the content manifest databases before using this data.
type DestinyComponentsKiosksDestinyKiosksComponent struct {
	KioskItems map[string][]DestinyComponentsKiosksDestinyKioskItem
}
