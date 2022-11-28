from dataclasses import dataclass, field



@dataclass
class FederatedUser:
    r"""FederatedUser
    Identifiers for the federated user that is associated with the credentials.
    """
    
    arn: str = field()
    federated_user_id: str = field()
    
