from dataclasses import dataclass, field
from enum import Enum

class SupportDataSetTypeEnum(str, Enum):
    CUSTOMER_SUPPORT_CONTACTS_DATA = "customer_support_contacts_data"
    TEST_CUSTOMER_SUPPORT_CONTACTS_DATA = "test_customer_support_contacts_data"

