from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class VehicleRegistrationSchemaCertificateDataVehicleRegistrationInsurance:
    company_name: Optional[str] = field(default=None)
    policy_no: Optional[str] = field(default=None)
    valid_till: Optional[str] = field(default=None)
    

@dataclass
class VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle:
    chasis_no: Optional[str] = field(default=None)
    class_: Optional[dict[str, Any]] = field(default=None)
    color: Optional[str] = field(default=None)
    cubic_capacity: Optional[dict[str, Any]] = field(default=None)
    cylinder: Optional[dict[str, Any]] = field(default=None)
    engine_no: Optional[str] = field(default=None)
    fit_till: Optional[dict[str, Any]] = field(default=None)
    fuel_desc: Optional[dict[str, Any]] = field(default=None)
    make: Optional[dict[str, Any]] = field(default=None)
    mfg_date: Optional[dict[str, Any]] = field(default=None)
    model: Optional[str] = field(default=None)
    seat_capacity: Optional[str] = field(default=None)
    sleeper_capacity: Optional[str] = field(default=None)
    standing_capacity: Optional[dict[str, Any]] = field(default=None)
    unladen_weight: Optional[str] = field(default=None)
    wheelbase: Optional[dict[str, Any]] = field(default=None)
    

@dataclass
class VehicleRegistrationSchemaCertificateDataVehicleRegistration:
    financer: str = field()
    norms_desc: str = field()
    status_date: str = field()
    insurance: Optional[VehicleRegistrationSchemaCertificateDataVehicleRegistrationInsurance] = field(default=None)
    vehicle: Optional[VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle] = field(default=None)
    

@dataclass
class VehicleRegistrationSchemaCertificateData:
    vehicle_registration: Optional[VehicleRegistrationSchemaCertificateDataVehicleRegistration] = field(default=None)
    

@dataclass
class VehicleRegistrationSchemaIssuedByOrganizationAddress:
    country: str = field()
    district: str = field()
    house: str = field()
    landmark: str = field()
    line1: str = field()
    line2: str = field()
    locality: str = field()
    pin: str = field()
    state: str = field()
    type: str = field()
    vtc: str = field()
    

@dataclass
class VehicleRegistrationSchemaIssuedByOrganization:
    address: VehicleRegistrationSchemaIssuedByOrganizationAddress = field()
    code: str = field()
    name: str = field()
    tin: str = field()
    type: str = field()
    uid: str = field()
    

@dataclass
class VehicleRegistrationSchemaIssuedBy:
    organization: VehicleRegistrationSchemaIssuedByOrganization = field()
    

@dataclass
class VehicleRegistrationSchemaIssuedToPersonAddress:
    country: str = field()
    district: str = field()
    house: str = field()
    landmark: str = field()
    line1: str = field()
    line2: str = field()
    locality: str = field()
    pin: str = field()
    state: str = field()
    type: str = field()
    vtc: str = field()
    

@dataclass
class VehicleRegistrationSchemaIssuedToPersonPhoto:
    format: str = field()
    

@dataclass
class VehicleRegistrationSchemaIssuedToPerson:
    address: VehicleRegistrationSchemaIssuedToPersonAddress = field()
    photo: VehicleRegistrationSchemaIssuedToPersonPhoto = field()
    dob: str = field()
    email: str = field()
    gender: str = field()
    marital_status: str = field()
    name: str = field()
    phone: str = field()
    religion: str = field()
    swd: str = field()
    swd_indicator: str = field()
    title: str = field()
    uid: str = field()
    

@dataclass
class VehicleRegistrationSchemaIssuedTo:
    person: VehicleRegistrationSchemaIssuedToPerson = field()
    

@dataclass
class VehicleRegistrationSchema:
    certificate_data: VehicleRegistrationSchemaCertificateData = field()
    issued_by: VehicleRegistrationSchemaIssuedBy = field()
    issued_to: VehicleRegistrationSchemaIssuedTo = field()
    issue_date: str = field()
    issued_at: str = field()
    language: str = field()
    name: str = field()
    number: int = field()
    status: str = field()
    type: str = field()
    valid_from_date: str = field()
    expiry_date: Optional[str] = field(default=None)
    
