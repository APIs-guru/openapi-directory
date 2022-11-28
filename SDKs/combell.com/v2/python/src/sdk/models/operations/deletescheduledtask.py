from dataclasses import dataclass, field



@dataclass
class DeleteScheduledTaskPathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    scheduled_task_id: str = field(metadata={'path_param': { 'field_name': 'scheduledTaskId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteScheduledTaskQueryParams:
    domain_name: str = field(metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    scheduled_task_id: str = field(metadata={'query_param': { 'field_name': 'scheduled_task_id', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteScheduledTaskRequest:
    path_params: DeleteScheduledTaskPathParams = field()
    query_params: DeleteScheduledTaskQueryParams = field()
    

@dataclass
class DeleteScheduledTaskResponse:
    content_type: str = field()
    status_code: int = field()
    
