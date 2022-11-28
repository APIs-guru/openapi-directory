from dataclasses import dataclass, field



@dataclass
class PauseClusterMessage:
    r"""PauseClusterMessage
    Describes a pause cluster operation. For example, a scheduled action to run the <code>PauseCluster</code> API operation. 
    """
    
    cluster_identifier: str = field()
    
