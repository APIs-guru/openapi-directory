from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ResizeProgressMessage:
    r"""ResizeProgressMessage
    Describes the result of a cluster resize operation.
    """
    
    avg_resize_rate_in_mega_bytes_per_second: Optional[float] = field(default=None)
    data_transfer_progress_percent: Optional[float] = field(default=None)
    elapsed_time_in_seconds: Optional[int] = field(default=None)
    estimated_time_to_completion_in_seconds: Optional[int] = field(default=None)
    import_tables_completed: Optional[List[str]] = field(default=None)
    import_tables_in_progress: Optional[List[str]] = field(default=None)
    import_tables_not_started: Optional[List[str]] = field(default=None)
    message: Optional[str] = field(default=None)
    progress_in_mega_bytes: Optional[int] = field(default=None)
    resize_type: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    target_cluster_type: Optional[str] = field(default=None)
    target_encryption_type: Optional[str] = field(default=None)
    target_node_type: Optional[str] = field(default=None)
    target_number_of_nodes: Optional[int] = field(default=None)
    total_resize_data_in_mega_bytes: Optional[int] = field(default=None)
    
