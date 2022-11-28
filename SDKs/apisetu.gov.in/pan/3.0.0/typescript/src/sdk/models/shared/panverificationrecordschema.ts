import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PanVerificationRecordSchemaCertificateDataPanVerificationRecord extends SpeakeasyBase {
  @SpeakeasyMetadata()
  num: string;

  @SpeakeasyMetadata()
  verifiedOn: string;
}


export class PanVerificationRecordSchemaCertificateData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  panVerificationRecord?: PanVerificationRecordSchemaCertificateDataPanVerificationRecord;
}


export class PanVerificationRecordSchemaIssuedByOrganizationAddress extends SpeakeasyBase {
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


export class PanVerificationRecordSchemaIssuedByOrganization extends SpeakeasyBase {
  @SpeakeasyMetadata()
  address: PanVerificationRecordSchemaIssuedByOrganizationAddress;

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


export class PanVerificationRecordSchemaIssuedBy extends SpeakeasyBase {
  @SpeakeasyMetadata()
  organization: PanVerificationRecordSchemaIssuedByOrganization;
}


export class PanVerificationRecordSchemaIssuedToPersonAddress extends SpeakeasyBase {
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


export class PanVerificationRecordSchemaIssuedToPersonPhoto extends SpeakeasyBase {
  @SpeakeasyMetadata()
  format: string;
}


export class PanVerificationRecordSchemaIssuedToPerson extends SpeakeasyBase {
  @SpeakeasyMetadata()
  address: PanVerificationRecordSchemaIssuedToPersonAddress;

  @SpeakeasyMetadata()
  photo: PanVerificationRecordSchemaIssuedToPersonPhoto;

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


export class PanVerificationRecordSchemaIssuedTo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  person: PanVerificationRecordSchemaIssuedToPerson;
}


export class PanVerificationRecordSchema extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateData: PanVerificationRecordSchemaCertificateData;

  @SpeakeasyMetadata()
  issuedBy: PanVerificationRecordSchemaIssuedBy;

  @SpeakeasyMetadata()
  issuedTo: PanVerificationRecordSchemaIssuedTo;

  @SpeakeasyMetadata()
  issueDate: string;

  @SpeakeasyMetadata()
  issuedAt: string;

  @SpeakeasyMetadata()
  language: string;

  @SpeakeasyMetadata()
  name: string;

  @SpeakeasyMetadata()
  number: string;

  @SpeakeasyMetadata()
  status: string;

  @SpeakeasyMetadata()
  type: string;

  @SpeakeasyMetadata()
  validFromDate: string;
}
