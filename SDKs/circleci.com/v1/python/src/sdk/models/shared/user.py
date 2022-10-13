from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class User:
    admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'admin' }})
    all_emails: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'all_emails' }})
    analytics_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analytics_id' }})
    avatar_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatar_url' }})
    basic_email_prefs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basic_email_prefs' }})
    bitbucket: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bitbucket' }})
    bitbucket_authorized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bitbucket_authorized' }})
    containers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containers' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    days_left_in_trial: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'days_left_in_trial' }})
    dev_admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dev_admin' }})
    enrolled_betas: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enrolled_betas' }})
    github_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'github_id' }})
    github_oauth_scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'github_oauth_scopes' }})
    gravatar_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gravatar_id' }})
    heroku_api_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'heroku_api_key' }})
    in_beta_program: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'in_beta_program' }})
    login: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    organization_prefs: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization_prefs' }})
    parallelism: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parallelism' }})
    plan: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plan' }})
    projects: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projects' }})
    pusher_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pusher_id' }})
    selected_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selected_email' }})
    sign_in_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sign_in_count' }})
    trial_end: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trial_end', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
