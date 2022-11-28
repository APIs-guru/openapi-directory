import { SpeakeasyBase } from "../../../internal/utils";
export declare class PanVerificationRecordSchemaCertificateDataPanVerificationRecord extends SpeakeasyBase {
    num: string;
    verifiedOn: string;
}
export declare class PanVerificationRecordSchemaCertificateData extends SpeakeasyBase {
    panVerificationRecord?: PanVerificationRecordSchemaCertificateDataPanVerificationRecord;
}
export declare class PanVerificationRecordSchemaIssuedByOrganizationAddress extends SpeakeasyBase {
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
export declare class PanVerificationRecordSchemaIssuedByOrganization extends SpeakeasyBase {
    address: PanVerificationRecordSchemaIssuedByOrganizationAddress;
    code: string;
    name: string;
    tin: string;
    type: string;
    uid: string;
}
export declare class PanVerificationRecordSchemaIssuedBy extends SpeakeasyBase {
    organization: PanVerificationRecordSchemaIssuedByOrganization;
}
export declare class PanVerificationRecordSchemaIssuedToPersonAddress extends SpeakeasyBase {
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
export declare class PanVerificationRecordSchemaIssuedToPersonPhoto extends SpeakeasyBase {
    format: string;
}
export declare class PanVerificationRecordSchemaIssuedToPerson extends SpeakeasyBase {
    address: PanVerificationRecordSchemaIssuedToPersonAddress;
    photo: PanVerificationRecordSchemaIssuedToPersonPhoto;
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
export declare class PanVerificationRecordSchemaIssuedTo extends SpeakeasyBase {
    person: PanVerificationRecordSchemaIssuedToPerson;
}
export declare class PanVerificationRecordSchema extends SpeakeasyBase {
    certificateData: PanVerificationRecordSchemaCertificateData;
    issuedBy: PanVerificationRecordSchemaIssuedBy;
    issuedTo: PanVerificationRecordSchemaIssuedTo;
    issueDate: string;
    issuedAt: string;
    language: string;
    name: string;
    number: string;
    status: string;
    type: string;
    validFromDate: string;
}
