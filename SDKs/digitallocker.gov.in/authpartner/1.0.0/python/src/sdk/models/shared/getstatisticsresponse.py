from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetStatisticsResponseMonthwiseRegistationsDetails2:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('month') }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    

@dataclass_json
@dataclass
class GetStatisticsResponseMonthwiseRegistations:
    r"""GetStatisticsResponseMonthwiseRegistations
    List of last 12 months cumulative user registrations
    """
    
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    details2: Optional[GetStatisticsResponseMonthwiseRegistationsDetails2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details2') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('month') }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    

@dataclass_json
@dataclass
class GetStatisticsResponseYearwiseAuthenticDocumentsDetails:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    

@dataclass_json
@dataclass
class GetStatisticsResponseYearwiseAuthenticDocumentsDetails1:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    

@dataclass_json
@dataclass
class GetStatisticsResponseYearwiseAuthenticDocumentsDetails2:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    

@dataclass_json
@dataclass
class GetStatisticsResponseYearwiseAuthenticDocuments:
    r"""GetStatisticsResponseYearwiseAuthenticDocuments
    List of cumulative year-wise counts of authentic documents in DigiLocker.
    """
    
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    details: Optional[GetStatisticsResponseYearwiseAuthenticDocumentsDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    details1: Optional[GetStatisticsResponseYearwiseAuthenticDocumentsDetails1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details1') }})
    details2: Optional[GetStatisticsResponseYearwiseAuthenticDocumentsDetails2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details2') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    

@dataclass_json
@dataclass
class GetStatisticsResponse:
    authentic_documents: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentic_documents') }})
    count_as_on: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count_as_on') }})
    issuers: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuers') }})
    monthwise_registations: GetStatisticsResponseMonthwiseRegistations = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthwise_registations') }})
    requestors: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestors') }})
    users: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    yearwise_authentic_documents: GetStatisticsResponseYearwiseAuthenticDocuments = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('yearwise_authentic_documents') }})
    
