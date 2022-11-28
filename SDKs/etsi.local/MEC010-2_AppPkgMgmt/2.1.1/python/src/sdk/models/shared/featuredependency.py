from dataclasses import dataclass, field



@dataclass
class FeatureDependency:
    feature_name: str = field()
    version: str = field()
    
