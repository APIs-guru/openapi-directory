from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class SearchProjectSoftwarepackageQueryParams:
    changedate_from: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'changedate.from', 'style': 'form', 'explode': True }})
    changedate_to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'changedate.to', 'style': 'form', 'explode': True }})
    createdate_from: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'createdate.from', 'style': 'form', 'explode': True }})
    createdate_to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'createdate.to', 'style': 'form', 'explode': True }})
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    filesuffix: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filesuffix', 'style': 'form', 'explode': True }})
    fromdate: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'fromdate', 'style': 'form', 'explode': True }})
    group: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'group', 'style': 'form', 'explode': True }})
    max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': True }})
    maxlatitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'maxlatitude', 'style': 'form', 'explode': True }})
    maxlongitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'maxlongitude', 'style': 'form', 'explode': True }})
    minlatitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'minlatitude', 'style': 'form', 'explode': True }})
    minlongitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'minlongitude', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    search_project_softwarepackage_capabilities: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.project_softwarepackage.capabilities', 'style': 'form', 'explode': True }})
    search_project_softwarepackage_domain: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.project_softwarepackage.domain', 'style': 'form', 'explode': True }})
    search_project_softwarepackage_license: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.project_softwarepackage.license', 'style': 'form', 'explode': True }})
    search_project_softwarepackage_platform: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.project_softwarepackage.platform', 'style': 'form', 'explode': True }})
    search_project_softwarepackage_software_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.project_softwarepackage.software_type', 'style': 'form', 'explode': True }})
    search_project_softwarepackage_software_use: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.project_softwarepackage.software_use', 'style': 'form', 'explode': True }})
    search_project_softwarepackage_status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.project_softwarepackage.status', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    todate: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchProjectSoftwarepackageRequest:
    query_params: SearchProjectSoftwarepackageQueryParams = field(default=None)
    

@dataclass
class SearchProjectSoftwarepackageResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
