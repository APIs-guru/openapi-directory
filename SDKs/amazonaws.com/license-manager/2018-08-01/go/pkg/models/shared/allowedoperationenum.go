package shared




type AllowedOperationEnum string

const (
    AllowedOperationEnumCreateGrant AllowedOperationEnum = "CreateGrant"
AllowedOperationEnumCheckoutLicense AllowedOperationEnum = "CheckoutLicense"
AllowedOperationEnumCheckoutBorrowLicense AllowedOperationEnum = "CheckoutBorrowLicense"
AllowedOperationEnumCheckInLicense AllowedOperationEnum = "CheckInLicense"
AllowedOperationEnumExtendConsumptionLicense AllowedOperationEnum = "ExtendConsumptionLicense"
AllowedOperationEnumListPurchasedLicenses AllowedOperationEnum = "ListPurchasedLicenses"
AllowedOperationEnumCreateToken AllowedOperationEnum = "CreateToken"
)


