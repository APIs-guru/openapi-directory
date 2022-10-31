from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateRecommenderConfigurationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration:
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    recommendation_provider_id_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecommendationProviderIdType' }})
    recommendation_provider_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecommendationProviderRoleArn' }})
    recommendation_provider_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecommendationProviderUri' }})
    recommendation_transformer_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecommendationTransformerUri' }})
    recommendations_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecommendationsDisplayName' }})
    recommendations_per_message: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecommendationsPerMessage' }})
    

@dataclass_json
@dataclass
class CreateRecommenderConfigurationRequestBody:
    create_recommender_configuration: CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateRecommenderConfiguration' }})
    

@dataclass
class CreateRecommenderConfigurationRequest:
    headers: CreateRecommenderConfigurationHeaders = field(default=None)
    request: CreateRecommenderConfigurationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateRecommenderConfigurationResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_recommender_configuration_response: Optional[shared.CreateRecommenderConfigurationResponse] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    method_not_allowed_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    payload_too_large_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
