from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List


@dataclass
class AcademicCertificateSchemaCertificateDataExamination:
    month: str = field()
    name: str = field()
    year: str = field()
    

@dataclass
class AcademicCertificateSchemaCertificateDataPerformanceSubjects:
    code: str = field()
    gp: str = field()
    gp_max: str = field()
    grade: str = field()
    marks_max: int = field()
    marks_max_practical: int = field()
    marks_max_theory: int = field()
    marks_practical: int = field()
    marks_theory: int = field()
    marks_total: int = field()
    name: str = field()
    

@dataclass
class AcademicCertificateSchemaCertificateDataPerformance:
    subjects: List[AcademicCertificateSchemaCertificateDataPerformanceSubjects] = field()
    cgpa: str = field()
    cgpa_max: str = field()
    grade: str = field()
    marks_max: str = field()
    marks_total: str = field()
    percentage: str = field()
    result: str = field()
    result_date: str = field()
    update_date: str = field()
    

@dataclass
class AcademicCertificateSchemaCertificateDataSchool:
    code: str = field()
    name: str = field()
    

@dataclass
class AcademicCertificateSchemaCertificateData:
    examination: AcademicCertificateSchemaCertificateDataExamination = field()
    performance: AcademicCertificateSchemaCertificateDataPerformance = field()
    school: AcademicCertificateSchemaCertificateDataSchool = field()
    

@dataclass
class AcademicCertificateSchemaIssuedByOrganizationAddress:
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
class AcademicCertificateSchemaIssuedByOrganization:
    address: AcademicCertificateSchemaIssuedByOrganizationAddress = field()
    code: str = field()
    name: str = field()
    tin: str = field()
    type: str = field()
    uid: str = field()
    

@dataclass
class AcademicCertificateSchemaIssuedBy:
    organization: AcademicCertificateSchemaIssuedByOrganization = field()
    

@dataclass
class AcademicCertificateSchemaIssuedToPersonAddress:
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
class AcademicCertificateSchemaIssuedToPersonPhoto:
    format: str = field()
    

@dataclass
class AcademicCertificateSchemaIssuedToPerson:
    address: AcademicCertificateSchemaIssuedToPersonAddress = field()
    photo: AcademicCertificateSchemaIssuedToPersonPhoto = field()
    category: str = field()
    disability_status: str = field()
    dob: str = field()
    email: str = field()
    gender: str = field()
    marital_status: str = field()
    mother_name: str = field()
    name: str = field()
    phone: str = field()
    religion: str = field()
    swd: str = field()
    swd_indicator: str = field()
    title: str = field()
    uid: str = field()
    

@dataclass
class AcademicCertificateSchemaIssuedTo:
    person: AcademicCertificateSchemaIssuedToPerson = field()
    

@dataclass
class AcademicCertificateSchema:
    certificate_data: AcademicCertificateSchemaCertificateData = field()
    issued_by: AcademicCertificateSchemaIssuedBy = field()
    issued_to: AcademicCertificateSchemaIssuedTo = field()
    issue_date: str = field()
    issued_at: str = field()
    language: str = field()
    name: str = field()
    number: int = field()
    status: str = field()
    type: str = field()
    valid_from_date: str = field()
    
