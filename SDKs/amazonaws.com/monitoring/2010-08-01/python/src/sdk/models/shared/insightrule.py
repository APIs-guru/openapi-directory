from dataclasses import dataclass, field



@dataclass
class InsightRule:
    r"""InsightRule
    This structure contains the definition for a Contributor Insights rule.
    """
    
    definition: str = field()
    name: str = field()
    schema: str = field()
    state: str = field()
    
