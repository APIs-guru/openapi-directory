from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class StandardHl7ConfigurationPhoneNumberFormattingEnum(str, Enum):
    STANDARD = "STANDARD"
    ONLY_DIGITS_IN_COMPONENT_ONE = "ONLY_DIGITS_IN_COMPONENT_ONE"
    AREA_LOCAL_IN_COMPONENT_ONE = "AREA_LOCAL_IN_COMPONENT_ONE"


@dataclass_json
@dataclass
class StandardHl7Configuration:
    r"""StandardHl7Configuration
    A standard HL7 configuration
    """
    
    include_aoe: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeAOE') }})
    transport: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transport') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    use_batch_headers: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('useBatchHeaders') }})
    convert_timestamp_to_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('convertTimestampToDateTime') }})
    default_aoe_to_unknown: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultAoeToUnknown') }})
    name_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameFormat') }})
    phone_number_formatting: Optional[StandardHl7ConfigurationPhoneNumberFormattingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumberFormatting') }})
    receiving_application_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receivingApplicationName') }})
    receiving_application_oid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receivingApplicationOID') }})
    receiving_facility_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receivingFacilityName') }})
    receiving_facility_oid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receivingFacilityOID') }})
    receiving_organization: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receivingOrganization') }})
    reporting_facility_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportingFacilityId') }})
    reporting_facility_id_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportingFacilityIdType') }})
    reporting_facility_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportingFacilityName') }})
    suppress_aoe: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suppressAoe') }})
    suppress_hl7_fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suppressHl7Fields') }})
    suppress_qst_for_aoe: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suppressQstForAoe') }})
    truncate_hd_namespace_ids: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('truncateHDNamespaceIds') }})
    use_blank_instead_of_unknown: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useBlankInsteadOfUnknown') }})
    use_pid14_for_patient_email: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usePid14ForPatientEmail') }})
    use_test_processing_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useTestProcessingMode') }})
    
