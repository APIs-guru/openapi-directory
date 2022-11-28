from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CustomerStorageMessage:
    total_backup_size_in_mega_bytes: Optional[float] = field(default=None)
    total_provisioned_storage_in_mega_bytes: Optional[float] = field(default=None)
    
