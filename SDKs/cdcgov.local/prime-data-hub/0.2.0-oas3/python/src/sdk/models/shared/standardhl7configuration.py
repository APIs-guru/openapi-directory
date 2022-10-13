from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import sftptransport
from . import as2transport
from . import blobstoretransport
from . import nulltransport

class StandardHl7ConfigurationPhoneNumberFormattingEnum(str, Enum):
    STANDARD = "STANDARD"
    ONLY_DIGITS_IN_COMPONENT_ONE = "ONLY_DIGITS_IN_COMPONENT_ONE"
    AREA_LOCAL_IN_COMPONENT_ONE = "AREA_LOCAL_IN_COMPONENT_ONE"


@dataclass_json
@dataclass
class StandardHl7Configuration:
    convert_timestamp_to_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'convertTimestampToDateTime' }})
    default_aoe_to_unknown: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultAoeToUnknown' }})
    include_aoe: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeAOE' }})
    name_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nameFormat' }})
    phone_number_formatting: Optional[StandardHl7ConfigurationPhoneNumberFormattingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNumberFormatting' }})
    receiving_application_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receivingApplicationName' }})
    receiving_application_oid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receivingApplicationOID' }})
    receiving_facility_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receivingFacilityName' }})
    receiving_facility_oid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receivingFacilityOID' }})
    receiving_organization: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receivingOrganization' }})
    reporting_facility_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportingFacilityId' }})
    reporting_facility_id_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportingFacilityIdType' }})
    reporting_facility_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportingFacilityName' }})
    suppress_aoe: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suppressAoe' }})
    suppress_hl7_fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suppressHl7Fields' }})
    suppress_qst_for_aoe: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suppressQstForAoe' }})
    transport: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transport' }})
    truncate_hd_namespace_ids: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'truncateHDNamespaceIds' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    use_batch_headers: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useBatchHeaders' }})
    use_blank_instead_of_unknown: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useBlankInsteadOfUnknown' }})
    use_pid14_for_patient_email: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usePid14ForPatientEmail' }})
    use_test_processing_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useTestProcessingMode' }})
    
