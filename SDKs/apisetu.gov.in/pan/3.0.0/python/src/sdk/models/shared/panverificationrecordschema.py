from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class PanVerificationRecordSchemaCertificateDataPanVerificationRecord:
    num: str = field()
    verified_on: str = field()
    

@dataclass
class PanVerificationRecordSchemaCertificateData:
    pan_verification_record: Optional[PanVerificationRecordSchemaCertificateDataPanVerificationRecord] = field(default=None)
    

@dataclass
class PanVerificationRecordSchemaIssuedByOrganizationAddress:
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
class PanVerificationRecordSchemaIssuedByOrganization:
    address: PanVerificationRecordSchemaIssuedByOrganizationAddress = field()
    code: str = field()
    name: str = field()
    tin: str = field()
    type: str = field()
    uid: str = field()
    

@dataclass
class PanVerificationRecordSchemaIssuedBy:
    organization: PanVerificationRecordSchemaIssuedByOrganization = field()
    

@dataclass
class PanVerificationRecordSchemaIssuedToPersonAddress:
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
class PanVerificationRecordSchemaIssuedToPersonPhoto:
    format: str = field()
    

@dataclass
class PanVerificationRecordSchemaIssuedToPerson:
    address: PanVerificationRecordSchemaIssuedToPersonAddress = field()
    photo: PanVerificationRecordSchemaIssuedToPersonPhoto = field()
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
class PanVerificationRecordSchemaIssuedTo:
    person: PanVerificationRecordSchemaIssuedToPerson = field()
    

@dataclass
class PanVerificationRecordSchema:
    certificate_data: PanVerificationRecordSchemaCertificateData = field()
    issued_by: PanVerificationRecordSchemaIssuedBy = field()
    issued_to: PanVerificationRecordSchemaIssuedTo = field()
    issue_date: str = field()
    issued_at: str = field()
    language: str = field()
    name: str = field()
    number: str = field()
    status: str = field()
    type: str = field()
    valid_from_date: str = field()
    
