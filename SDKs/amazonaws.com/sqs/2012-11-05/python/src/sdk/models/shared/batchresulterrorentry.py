from dataclasses import dataclass, field
from typing import Optional


@dataclass
class BatchResultErrorEntry:
    r"""BatchResultErrorEntry
    Gives a detailed description of the result of an action on each entry in the request.
    """
    
    code: str = field()
    id: str = field()
    sender_fault: bool = field()
    message: Optional[str] = field(default=None)
    
