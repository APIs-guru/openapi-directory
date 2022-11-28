import { SpeakeasyBase } from "../../../internal/utils";
export declare class DrivingLicenseSchemaCertificateDataDrivingLicense extends SpeakeasyBase {
    abbreviation: string;
    code: string;
    description: string;
    endorseDate: string;
    issueDate: string;
}
export declare class DrivingLicenseSchemaCertificateData extends SpeakeasyBase {
    drivingLicense?: DrivingLicenseSchemaCertificateDataDrivingLicense;
}
export declare class DrivingLicenseSchemaIssuedByOrganizationAddress extends SpeakeasyBase {
    country: string;
    district: string;
    house: string;
    landmark: string;
    line1: string;
    line2: string;
    locality: string;
    pin: string;
    state: string;
    type: string;
    vtc: string;
}
export declare class DrivingLicenseSchemaIssuedByOrganization extends SpeakeasyBase {
    address: DrivingLicenseSchemaIssuedByOrganizationAddress;
    code: string;
    name: string;
    tin: string;
    type: string;
    uid: string;
}
export declare class DrivingLicenseSchemaIssuedBy extends SpeakeasyBase {
    organization: DrivingLicenseSchemaIssuedByOrganization;
}
export declare class DrivingLicenseSchemaIssuedToPersonAddress extends SpeakeasyBase {
    country: string;
    district: string;
    house: string;
    landmark: string;
    line1: string;
    line2: string;
    locality: string;
    pin: string;
    state: string;
    type: string;
    vtc: string;
}
export declare class DrivingLicenseSchemaIssuedToPersonPhoto extends SpeakeasyBase {
    format: string;
}
export declare class DrivingLicenseSchemaIssuedToPerson extends SpeakeasyBase {
    address: DrivingLicenseSchemaIssuedToPersonAddress;
    photo: DrivingLicenseSchemaIssuedToPersonPhoto;
    dob: string;
    email: string;
    gender: string;
    maritalStatus: string;
    name: string;
    phone: string;
    religion: string;
    swd: string;
    swdIndicator: string;
    title: string;
    uid: string;
}
export declare class DrivingLicenseSchemaIssuedTo extends SpeakeasyBase {
    person: DrivingLicenseSchemaIssuedToPerson;
}
export declare class DrivingLicenseSchema extends SpeakeasyBase {
    certificateData: DrivingLicenseSchemaCertificateData;
    issuedBy: DrivingLicenseSchemaIssuedBy;
    issuedTo: DrivingLicenseSchemaIssuedTo;
    expiryDate?: string;
    issueDate: string;
    issuedAt: string;
    language: string;
    name: string;
    number: number;
    prevNumber?: number;
    status: string;
    type: string;
    validFromDate: string;
}
