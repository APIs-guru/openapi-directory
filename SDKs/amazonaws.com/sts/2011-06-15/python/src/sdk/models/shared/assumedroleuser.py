from dataclasses import dataclass, field



@dataclass
class AssumedRoleUser:
    r"""AssumedRoleUser
    The identifiers for the temporary security credentials that the operation returns.
    """
    
    arn: str = field()
    assumed_role_id: str = field()
    
