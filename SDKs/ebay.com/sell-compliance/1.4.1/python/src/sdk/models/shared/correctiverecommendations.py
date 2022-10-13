from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import aspectrecommendations
from . import productrecommendation


@dataclass_json
@dataclass
class CorrectiveRecommendations:
    aspect_recommendations: Optional[List[aspectrecommendations.AspectRecommendations]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aspectRecommendations' }})
    product_recommendation: Optional[productrecommendation.ProductRecommendation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productRecommendation' }})
    
