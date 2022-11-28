from dataclasses import dataclass, field
from enum import Enum

class AllowedOperationEnum(str, Enum):
    CREATE_GRANT = "CreateGrant"
    CHECKOUT_LICENSE = "CheckoutLicense"
    CHECKOUT_BORROW_LICENSE = "CheckoutBorrowLicense"
    CHECK_IN_LICENSE = "CheckInLicense"
    EXTEND_CONSUMPTION_LICENSE = "ExtendConsumptionLicense"
    LIST_PURCHASED_LICENSES = "ListPurchasedLicenses"
    CREATE_TOKEN = "CreateToken"

