from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class DrivingLicenseSchemaCertificateDataDrivingLicense:
    abbreviation: str = field()
    code: str = field()
    description: str = field()
    endorse_date: str = field()
    issue_date: str = field()
    

@dataclass
class DrivingLicenseSchemaCertificateData:
    driving_license: Optional[DrivingLicenseSchemaCertificateDataDrivingLicense] = field(default=None)
    

@dataclass
class DrivingLicenseSchemaIssuedByOrganizationAddress:
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
class DrivingLicenseSchemaIssuedByOrganization:
    address: DrivingLicenseSchemaIssuedByOrganizationAddress = field()
    code: str = field()
    name: str = field()
    tin: str = field()
    type: str = field()
    uid: str = field()
    

@dataclass
class DrivingLicenseSchemaIssuedBy:
    organization: DrivingLicenseSchemaIssuedByOrganization = field()
    

@dataclass
class DrivingLicenseSchemaIssuedToPersonAddress:
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
class DrivingLicenseSchemaIssuedToPersonPhoto:
    format: str = field()
    

@dataclass
class DrivingLicenseSchemaIssuedToPerson:
    address: DrivingLicenseSchemaIssuedToPersonAddress = field()
    photo: DrivingLicenseSchemaIssuedToPersonPhoto = field()
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
class DrivingLicenseSchemaIssuedTo:
    person: DrivingLicenseSchemaIssuedToPerson = field()
    

@dataclass
class DrivingLicenseSchema:
    certificate_data: DrivingLicenseSchemaCertificateData = field()
    issued_by: DrivingLicenseSchemaIssuedBy = field()
    issued_to: DrivingLicenseSchemaIssuedTo = field()
    issue_date: str = field()
    issued_at: str = field()
    language: str = field()
    name: str = field()
    number: int = field()
    status: str = field()
    type: str = field()
    valid_from_date: str = field()
    expiry_date: Optional[str] = field(default=None)
    prev_number: Optional[int] = field(default=None)
    
