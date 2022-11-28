from dataclasses import dataclass, field



@dataclass
class ChangeMessageVisibilityBatchResultEntry:
    r"""ChangeMessageVisibilityBatchResultEntry
    Encloses the <code>Id</code> of an entry in <code> <a>ChangeMessageVisibilityBatch</a>.</code> 
    """
    
    id: str = field()
    
