from dataclasses import dataclass, field
from typing import Enum

class MetricsNameEnum(str, Enum):
    INCOMING_BYTES = "IncomingBytes"
    INCOMING_RECORDS = "IncomingRecords"
    OUTGOING_BYTES = "OutgoingBytes"
    OUTGOING_RECORDS = "OutgoingRecords"
    WRITE_PROVISIONED_THROUGHPUT_EXCEEDED = "WriteProvisionedThroughputExceeded"
    READ_PROVISIONED_THROUGHPUT_EXCEEDED = "ReadProvisionedThroughputExceeded"
    ITERATOR_AGE_MILLISECONDS = "IteratorAgeMilliseconds"
    ALL = "ALL"

