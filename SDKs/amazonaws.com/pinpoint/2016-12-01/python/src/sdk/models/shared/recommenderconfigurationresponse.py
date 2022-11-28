from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RecommenderConfigurationResponse:
    r"""RecommenderConfigurationResponse
    Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.
    """
    
    creation_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    last_modified_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedDate') }})
    recommendation_provider_role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecommendationProviderRoleArn') }})
    recommendation_provider_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecommendationProviderUri') }})
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    recommendation_provider_id_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecommendationProviderIdType') }})
    recommendation_transformer_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecommendationTransformerUri') }})
    recommendations_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecommendationsDisplayName') }})
    recommendations_per_message: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecommendationsPerMessage') }})
    
