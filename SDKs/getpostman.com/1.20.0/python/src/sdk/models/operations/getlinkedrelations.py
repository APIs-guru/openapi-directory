from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetLinkedRelationsPathParams:
    api_id: str = field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    api_version_id: str = field(metadata={'path_param': { 'field_name': 'apiVersionId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetLinkedRelations200ApplicationJSONRelationsContracttest2a9b8fa888b74b8683728e3f6f6e07f2:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt') }})
    

@dataclass_json
@dataclass
class GetLinkedRelations200ApplicationJSONRelationsContracttest:
    twoa9b8fa8_88b7_4b86_8372_8e3f6f6e07f2: Optional[GetLinkedRelations200ApplicationJSONRelationsContracttest2a9b8fa888b74b8683728e3f6f6e07f2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2') }})
    

@dataclass_json
@dataclass
class GetLinkedRelations200ApplicationJSONRelationsIntegrationtest521b0486Ab914d3a918943c9380a0533:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt') }})
    

@dataclass_json
@dataclass
class GetLinkedRelations200ApplicationJSONRelationsIntegrationtestA236b715E682460b97b6C1db24f7612e:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt') }})
    

@dataclass_json
@dataclass
class GetLinkedRelations200ApplicationJSONRelationsIntegrationtest:
    five_hundred_and_twenty_oneb0486_ab91_4d3a_9189_43c9380a0533: Optional[GetLinkedRelations200ApplicationJSONRelationsIntegrationtest521b0486Ab914d3a918943c9380a0533] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('521b0486-ab91-4d3a-9189-43c9380a0533') }})
    a236b715_e682_460b_97b6_c1db24f7612e: Optional[GetLinkedRelations200ApplicationJSONRelationsIntegrationtestA236b715E682460b97b6C1db24f7612e] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('a236b715-e682-460b-97b6-c1db24f7612e') }})
    

@dataclass_json
@dataclass
class GetLinkedRelations200ApplicationJSONRelationsMock4ccd755f2c80481bA26249b55e12f5e1:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class GetLinkedRelations200ApplicationJSONRelationsMock:
    fourccd755f_2c80_481b_a262_49b55e12f5e1: Optional[GetLinkedRelations200ApplicationJSONRelationsMock4ccd755f2c80481bA26249b55e12f5e1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('4ccd755f-2c80-481b-a262-49b55e12f5e1') }})
    

@dataclass_json
@dataclass
class GetLinkedRelations200ApplicationJSONRelations:
    contracttest: Optional[GetLinkedRelations200ApplicationJSONRelationsContracttest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contracttest') }})
    integrationtest: Optional[GetLinkedRelations200ApplicationJSONRelationsIntegrationtest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationtest') }})
    mock: Optional[GetLinkedRelations200ApplicationJSONRelationsMock] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mock') }})
    

@dataclass_json
@dataclass
class GetLinkedRelations200ApplicationJSON:
    relations: Optional[GetLinkedRelations200ApplicationJSONRelations] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relations') }})
    

@dataclass
class GetLinkedRelationsRequest:
    path_params: GetLinkedRelationsPathParams = field()
    

@dataclass
class GetLinkedRelationsResponse:
    content_type: str = field()
    status_code: int = field()
    get_linked_relations_200_application_json_object: Optional[GetLinkedRelations200ApplicationJSON] = field(default=None)
    
