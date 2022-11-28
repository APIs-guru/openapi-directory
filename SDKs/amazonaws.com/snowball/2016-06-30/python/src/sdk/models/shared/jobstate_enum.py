from dataclasses import dataclass, field
from enum import Enum

class JobStateEnum(str, Enum):
    NEW = "New"
    PREPARING_APPLIANCE = "PreparingAppliance"
    PREPARING_SHIPMENT = "PreparingShipment"
    IN_TRANSIT_TO_CUSTOMER = "InTransitToCustomer"
    WITH_CUSTOMER = "WithCustomer"
    IN_TRANSIT_TO_AWS = "InTransitToAWS"
    WITH_AWS_SORTING_FACILITY = "WithAWSSortingFacility"
    WITH_AWS = "WithAWS"
    IN_PROGRESS = "InProgress"
    COMPLETE = "Complete"
    CANCELLED = "Cancelled"
    LISTING = "Listing"
    PENDING = "Pending"

