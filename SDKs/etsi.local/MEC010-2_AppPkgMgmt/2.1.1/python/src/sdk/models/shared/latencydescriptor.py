from dataclasses import dataclass, field



@dataclass
class LatencyDescriptor:
    max_latency: int = field()
    
