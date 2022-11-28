from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VehicleMotStatusEnum(str, Enum):
    NO_DETAILS_HELD_BY_DVLA = "No details held by DVLA"
    NO_RESULTS_RETURNED = "No results returned"
    NOT_VALID = "Not valid"
    VALID = "Valid"

class VehicleTaxStatusEnum(str, Enum):
    NOT_TAXED_FOR_ON_ROAD_USE = "Not Taxed for on Road Use"
    SORN = "SORN"
    TAXED = "Taxed"
    UNTAXED = "Untaxed"


@dataclass_json
@dataclass
class Vehicle:
    registration_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrationNumber') }})
    art_end_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artEndDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    co2_emissions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('co2Emissions') }})
    colour: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colour') }})
    date_of_last_v5_c_issued: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateOfLastV5CIssued'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    engine_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('engineCapacity') }})
    euro_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('euroStatus') }})
    fuel_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fuelType') }})
    make: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make') }})
    marked_for_export: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('markedForExport') }})
    month_of_first_dvla_registration: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthOfFirstDvlaRegistration'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    month_of_first_registration: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthOfFirstRegistration'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    mot_expiry_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('motExpiryDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    mot_status: Optional[VehicleMotStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('motStatus') }})
    real_driving_emissions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('realDrivingEmissions') }})
    revenue_weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revenueWeight') }})
    tax_due_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxDueDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tax_status: Optional[VehicleTaxStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxStatus') }})
    type_approval: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeApproval') }})
    wheelplan: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wheelplan') }})
    year_of_manufacture: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yearOfManufacture') }})
    
