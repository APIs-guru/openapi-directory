import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AcademicCertificateSchemaCertificateDataExamination extends SpeakeasyBase {
  @SpeakeasyMetadata()
  month: string;

  @SpeakeasyMetadata()
  name: string;

  @SpeakeasyMetadata()
  year: string;
}


export class AcademicCertificateSchemaCertificateDataPerformanceSubjects extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code: string;

  @SpeakeasyMetadata()
  gp: string;

  @SpeakeasyMetadata()
  gpMax: string;

  @SpeakeasyMetadata()
  grade: string;

  @SpeakeasyMetadata()
  marksMax: number;

  @SpeakeasyMetadata()
  marksMaxPractical: number;

  @SpeakeasyMetadata()
  marksMaxTheory: number;

  @SpeakeasyMetadata()
  marksPractical: number;

  @SpeakeasyMetadata()
  marksTheory: number;

  @SpeakeasyMetadata()
  marksTotal: number;

  @SpeakeasyMetadata()
  name: string;
}


export class AcademicCertificateSchemaCertificateDataPerformance extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AcademicCertificateSchemaCertificateDataPerformanceSubjects })
  subjects: AcademicCertificateSchemaCertificateDataPerformanceSubjects[];

  @SpeakeasyMetadata()
  cgpa: string;

  @SpeakeasyMetadata()
  cgpaMax: string;

  @SpeakeasyMetadata()
  grade: string;

  @SpeakeasyMetadata()
  marksMax: string;

  @SpeakeasyMetadata()
  marksTotal: string;

  @SpeakeasyMetadata()
  percentage: string;

  @SpeakeasyMetadata()
  result: string;

  @SpeakeasyMetadata()
  resultDate: string;

  @SpeakeasyMetadata()
  updateDate: string;
}


export class AcademicCertificateSchemaCertificateDataSchool extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code: string;

  @SpeakeasyMetadata()
  name: string;
}


export class AcademicCertificateSchemaCertificateData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  examination: AcademicCertificateSchemaCertificateDataExamination;

  @SpeakeasyMetadata()
  performance: AcademicCertificateSchemaCertificateDataPerformance;

  @SpeakeasyMetadata()
  school: AcademicCertificateSchemaCertificateDataSchool;
}


export class AcademicCertificateSchemaIssuedByOrganizationAddress extends SpeakeasyBase {
  @SpeakeasyMetadata()
  country: string;

  @SpeakeasyMetadata()
  district: string;

  @SpeakeasyMetadata()
  house: string;

  @SpeakeasyMetadata()
  landmark: string;

  @SpeakeasyMetadata()
  line1: string;

  @SpeakeasyMetadata()
  line2: string;

  @SpeakeasyMetadata()
  locality: string;

  @SpeakeasyMetadata()
  pin: string;

  @SpeakeasyMetadata()
  state: string;

  @SpeakeasyMetadata()
  type: string;

  @SpeakeasyMetadata()
  vtc: string;
}


export class AcademicCertificateSchemaIssuedByOrganization extends SpeakeasyBase {
  @SpeakeasyMetadata()
  address: AcademicCertificateSchemaIssuedByOrganizationAddress;

  @SpeakeasyMetadata()
  code: string;

  @SpeakeasyMetadata()
  name: string;

  @SpeakeasyMetadata()
  tin: string;

  @SpeakeasyMetadata()
  type: string;

  @SpeakeasyMetadata()
  uid: string;
}


export class AcademicCertificateSchemaIssuedBy extends SpeakeasyBase {
  @SpeakeasyMetadata()
  organization: AcademicCertificateSchemaIssuedByOrganization;
}


export class AcademicCertificateSchemaIssuedToPersonAddress extends SpeakeasyBase {
  @SpeakeasyMetadata()
  country: string;

  @SpeakeasyMetadata()
  district: string;

  @SpeakeasyMetadata()
  house: string;

  @SpeakeasyMetadata()
  landmark: string;

  @SpeakeasyMetadata()
  line1: string;

  @SpeakeasyMetadata()
  line2: string;

  @SpeakeasyMetadata()
  locality: string;

  @SpeakeasyMetadata()
  pin: string;

  @SpeakeasyMetadata()
  state: string;

  @SpeakeasyMetadata()
  type: string;

  @SpeakeasyMetadata()
  vtc: string;
}


export class AcademicCertificateSchemaIssuedToPersonPhoto extends SpeakeasyBase {
  @SpeakeasyMetadata()
  format: string;
}


export class AcademicCertificateSchemaIssuedToPerson extends SpeakeasyBase {
  @SpeakeasyMetadata()
  address: AcademicCertificateSchemaIssuedToPersonAddress;

  @SpeakeasyMetadata()
  photo: AcademicCertificateSchemaIssuedToPersonPhoto;

  @SpeakeasyMetadata()
  category: string;

  @SpeakeasyMetadata()
  disabilityStatus: string;

  @SpeakeasyMetadata()
  dob: string;

  @SpeakeasyMetadata()
  email: string;

  @SpeakeasyMetadata()
  gender: string;

  @SpeakeasyMetadata()
  maritalStatus: string;

  @SpeakeasyMetadata()
  motherName: string;

  @SpeakeasyMetadata()
  name: string;

  @SpeakeasyMetadata()
  phone: string;

  @SpeakeasyMetadata()
  religion: string;

  @SpeakeasyMetadata()
  swd: string;

  @SpeakeasyMetadata()
  swdIndicator: string;

  @SpeakeasyMetadata()
  title: string;

  @SpeakeasyMetadata()
  uid: string;
}


export class AcademicCertificateSchemaIssuedTo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  person: AcademicCertificateSchemaIssuedToPerson;
}


export class AcademicCertificateSchema extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateData: AcademicCertificateSchemaCertificateData;

  @SpeakeasyMetadata()
  issuedBy: AcademicCertificateSchemaIssuedBy;

  @SpeakeasyMetadata()
  issuedTo: AcademicCertificateSchemaIssuedTo;

  @SpeakeasyMetadata()
  issueDate: string;

  @SpeakeasyMetadata()
  issuedAt: string;

  @SpeakeasyMetadata()
  language: string;

  @SpeakeasyMetadata()
  name: string;

  @SpeakeasyMetadata()
  number: number;

  @SpeakeasyMetadata()
  status: string;

  @SpeakeasyMetadata()
  type: string;

  @SpeakeasyMetadata()
  validFromDate: string;
}
