from dataclasses import dataclass, field



@dataclass
class DeleteMessageBatchResultEntry:
    r"""DeleteMessageBatchResultEntry
    Encloses the <code>Id</code> of an entry in <code> <a>DeleteMessageBatch</a>.</code> 
    """
    
    id: str = field()
    
