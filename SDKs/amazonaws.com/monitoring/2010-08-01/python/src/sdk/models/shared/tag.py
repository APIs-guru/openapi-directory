from dataclasses import dataclass, field



@dataclass
class Tag:
    r"""Tag
    A key-value pair associated with a CloudWatch resource.
    """
    
    key: str = field()
    value: str = field()
    
