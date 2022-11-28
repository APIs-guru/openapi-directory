import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VehicleRegistrationSchemaCertificateDataVehicleRegistrationInsurance extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyName?: string;

  @SpeakeasyMetadata()
  policyNo?: string;

  @SpeakeasyMetadata()
  validTill?: string;
}


export class VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle extends SpeakeasyBase {
  @SpeakeasyMetadata()
  chasisNo?: string;

  @SpeakeasyMetadata()
  class?: Map<string, any>;

  @SpeakeasyMetadata()
  color?: string;

  @SpeakeasyMetadata()
  cubicCapacity?: Map<string, any>;

  @SpeakeasyMetadata()
  cylinder?: Map<string, any>;

  @SpeakeasyMetadata()
  engineNo?: string;

  @SpeakeasyMetadata()
  fitTill?: Map<string, any>;

  @SpeakeasyMetadata()
  fuelDesc?: Map<string, any>;

  @SpeakeasyMetadata()
  make?: Map<string, any>;

  @SpeakeasyMetadata()
  mfgDate?: Map<string, any>;

  @SpeakeasyMetadata()
  model?: string;

  @SpeakeasyMetadata()
  seatCapacity?: string;

  @SpeakeasyMetadata()
  sleeperCapacity?: string;

  @SpeakeasyMetadata()
  standingCapacity?: Map<string, any>;

  @SpeakeasyMetadata()
  unladenWeight?: string;

  @SpeakeasyMetadata()
  wheelbase?: Map<string, any>;
}


export class VehicleRegistrationSchemaCertificateDataVehicleRegistration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  insurance?: VehicleRegistrationSchemaCertificateDataVehicleRegistrationInsurance;

  @SpeakeasyMetadata()
  vehicle?: VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle;

  @SpeakeasyMetadata()
  financer: string;

  @SpeakeasyMetadata()
  normsDesc: string;

  @SpeakeasyMetadata()
  statusDate: string;
}


export class VehicleRegistrationSchemaCertificateData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  vehicleRegistration?: VehicleRegistrationSchemaCertificateDataVehicleRegistration;
}


export class VehicleRegistrationSchemaIssuedByOrganizationAddress extends SpeakeasyBase {
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


export class VehicleRegistrationSchemaIssuedByOrganization extends SpeakeasyBase {
  @SpeakeasyMetadata()
  address: VehicleRegistrationSchemaIssuedByOrganizationAddress;

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


export class VehicleRegistrationSchemaIssuedBy extends SpeakeasyBase {
  @SpeakeasyMetadata()
  organization: VehicleRegistrationSchemaIssuedByOrganization;
}


export class VehicleRegistrationSchemaIssuedToPersonAddress extends SpeakeasyBase {
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


export class VehicleRegistrationSchemaIssuedToPersonPhoto extends SpeakeasyBase {
  @SpeakeasyMetadata()
  format: string;
}


export class VehicleRegistrationSchemaIssuedToPerson extends SpeakeasyBase {
  @SpeakeasyMetadata()
  address: VehicleRegistrationSchemaIssuedToPersonAddress;

  @SpeakeasyMetadata()
  photo: VehicleRegistrationSchemaIssuedToPersonPhoto;

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


export class VehicleRegistrationSchemaIssuedTo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  person: VehicleRegistrationSchemaIssuedToPerson;
}


export class VehicleRegistrationSchema extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateData: VehicleRegistrationSchemaCertificateData;

  @SpeakeasyMetadata()
  issuedBy: VehicleRegistrationSchemaIssuedBy;

  @SpeakeasyMetadata()
  issuedTo: VehicleRegistrationSchemaIssuedTo;

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
  status: string;

  @SpeakeasyMetadata()
  type: string;

  @SpeakeasyMetadata()
  validFromDate: string;
}
