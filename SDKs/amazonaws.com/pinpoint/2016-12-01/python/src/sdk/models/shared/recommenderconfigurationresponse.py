from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RecommenderConfigurationResponse:
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    creation_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    last_modified_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedDate' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    recommendation_provider_id_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecommendationProviderIdType' }})
    recommendation_provider_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecommendationProviderRoleArn' }})
    recommendation_provider_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecommendationProviderUri' }})
    recommendation_transformer_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecommendationTransformerUri' }})
    recommendations_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecommendationsDisplayName' }})
    recommendations_per_message: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecommendationsPerMessage' }})
    
