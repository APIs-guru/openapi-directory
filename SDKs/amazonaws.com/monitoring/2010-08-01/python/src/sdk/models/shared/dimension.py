from dataclasses import dataclass, field



@dataclass
class Dimension:
    r"""Dimension
    A dimension is a name/value pair that is part of the identity of a metric. You can assign up to 10 dimensions to a metric. Because dimensions are part of the unique identifier for a metric, whenever you add a unique name/value pair to one of your metrics, you are creating a new variation of that metric. 
    """
    
    name: str = field()
    value: str = field()
    
