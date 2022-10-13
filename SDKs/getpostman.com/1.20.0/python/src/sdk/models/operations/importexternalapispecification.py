from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ImportExternalAPISpecificationRequestBodyInputInfoLicense:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class ImportExternalAPISpecificationRequestBodyInputInfo:
    license: Optional[ImportExternalAPISpecificationRequestBodyInputInfoLicense] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

@dataclass_json
@dataclass
class ImportExternalAPISpecificationRequestBodyInputPathsPetsGetParametersSchema:
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class ImportExternalAPISpecificationRequestBodyInputPathsPetsGetParameters:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    in_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'in' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required' }})
    schema: Optional[ImportExternalAPISpecificationRequestBodyInputPathsPetsGetParametersSchema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    

@dataclass_json
@dataclass
class ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchemaPropertiesCode:
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchemaPropertiesMessage:
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchemaProperties:
    code: Optional[ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchemaPropertiesCode] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchemaPropertiesMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchema:
    properties: Optional[ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchemaProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    required: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required' }})
    

@dataclass_json
@dataclass
class ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSON:
    schema: Optional[ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    

@dataclass_json
@dataclass
class ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContent:
    application_json: Optional[ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSON] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application/json' }})
    

@dataclass_json
@dataclass
class ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefault:
    content: Optional[ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    

@dataclass_json
@dataclass
class ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponses:
    default: Optional[ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefault] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default' }})
    

@dataclass_json
@dataclass
class ImportExternalAPISpecificationRequestBodyInputPathsPetsGet:
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationId' }})
    parameters: Optional[List[ImportExternalAPISpecificationRequestBodyInputPathsPetsGetParameters]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    responses: Optional[ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponses] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responses' }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    

@dataclass_json
@dataclass
class ImportExternalAPISpecificationRequestBodyInputPathsPets:
    get: Optional[ImportExternalAPISpecificationRequestBodyInputPathsPetsGet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'get' }})
    

@dataclass_json
@dataclass
class ImportExternalAPISpecificationRequestBodyInputPaths:
    root_pets: Optional[ImportExternalAPISpecificationRequestBodyInputPathsPets] = field(default=None, metadata={'dataclasses_json': { 'field_name': '/pets' }})
    

@dataclass_json
@dataclass
class ImportExternalAPISpecificationRequestBodyInputServers:
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ImportExternalAPISpecificationRequestBodyInput:
    info: Optional[ImportExternalAPISpecificationRequestBodyInputInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'info' }})
    openapi: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openapi' }})
    paths: Optional[ImportExternalAPISpecificationRequestBodyInputPaths] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paths' }})
    servers: Optional[List[ImportExternalAPISpecificationRequestBodyInputServers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servers' }})
    

@dataclass_json
@dataclass
class ImportExternalAPISpecificationRequestBody:
    input: Optional[ImportExternalAPISpecificationRequestBodyInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'input' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class ImportExternalAPISpecificationRequest:
    request: Optional[ImportExternalAPISpecificationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class ImportExternalAPISpecification200ApplicationJSONCollections:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    

@dataclass_json
@dataclass
class ImportExternalAPISpecification200ApplicationJSON:
    collections: Optional[List[ImportExternalAPISpecification200ApplicationJSONCollections]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collections' }})
    

@dataclass_json
@dataclass
class ImportExternalAPISpecification400ApplicationJSONErrorDetails:
    param: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'param' }})
    

@dataclass_json
@dataclass
class ImportExternalAPISpecification400ApplicationJSONError:
    details: Optional[ImportExternalAPISpecification400ApplicationJSONErrorDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class ImportExternalAPISpecification400ApplicationJSON:
    error: Optional[ImportExternalAPISpecification400ApplicationJSONError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    

@dataclass
class ImportExternalAPISpecificationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    import_external_api_specification_200_application_json_object: Optional[ImportExternalAPISpecification200ApplicationJSON] = field(default=None)
    import_external_api_specification_400_application_json_object: Optional[ImportExternalAPISpecification400ApplicationJSON] = field(default=None)
    
