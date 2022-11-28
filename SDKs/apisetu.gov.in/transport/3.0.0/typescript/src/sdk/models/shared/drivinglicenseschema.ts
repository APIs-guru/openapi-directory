import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DrivingLicenseSchemaCertificateDataDrivingLicense extends SpeakeasyBase {
  @SpeakeasyMetadata()
  abbreviation: string;

  @SpeakeasyMetadata()
  code: string;

  @SpeakeasyMetadata()
  description: string;

  @SpeakeasyMetadata()
  endorseDate: string;

  @SpeakeasyMetadata()
  issueDate: string;
}


export class DrivingLicenseSchemaCertificateData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  drivingLicense?: DrivingLicenseSchemaCertificateDataDrivingLicense;
}


export class DrivingLicenseSchemaIssuedByOrganizationAddress extends SpeakeasyBase {
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


export class DrivingLicenseSchemaIssuedByOrganization extends SpeakeasyBase {
  @SpeakeasyMetadata()
  address: DrivingLicenseSchemaIssuedByOrganizationAddress;

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


export class DrivingLicenseSchemaIssuedBy extends SpeakeasyBase {
  @SpeakeasyMetadata()
  organization: DrivingLicenseSchemaIssuedByOrganization;
}


export class DrivingLicenseSchemaIssuedToPersonAddress extends SpeakeasyBase {
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


export class DrivingLicenseSchemaIssuedToPersonPhoto extends SpeakeasyBase {
  @SpeakeasyMetadata()
  format: string;
}


export class DrivingLicenseSchemaIssuedToPerson extends SpeakeasyBase {
  @SpeakeasyMetadata()
  address: DrivingLicenseSchemaIssuedToPersonAddress;

  @SpeakeasyMetadata()
  photo: DrivingLicenseSchemaIssuedToPersonPhoto;

  @SpeakeasyMetadata()
  dob: string;

  @SpeakeasyMetadata()
  email: string;

  @SpeakeasyMetadata()
  gender: string;

  @SpeakeasyMetadata()
  maritalStatus: string;

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


export class DrivingLicenseSchemaIssuedTo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  person: DrivingLicenseSchemaIssuedToPerson;
}


export class DrivingLicenseSchema extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateData: DrivingLicenseSchemaCertificateData;

  @SpeakeasyMetadata()
  issuedBy: DrivingLicenseSchemaIssuedBy;

  @SpeakeasyMetadata()
  issuedTo: DrivingLicenseSchemaIssuedTo;

  @SpeakeasyMetadata()
  expiryDate?: string;

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
  prevNumber?: number;

  @SpeakeasyMetadata()
  status: string;

  @SpeakeasyMetadata()
  type: string;

  @SpeakeasyMetadata()
  validFromDate: string;
}
