import { SpeakeasyBase } from "../../../internal/utils";
export declare class AcademicCertificateSchemaCertificateDataExamination extends SpeakeasyBase {
    month: string;
    name: string;
    year: string;
}
export declare class AcademicCertificateSchemaCertificateDataPerformanceSubjects extends SpeakeasyBase {
    code: string;
    gp: string;
    gpMax: string;
    grade: string;
    marksMax: number;
    marksMaxPractical: number;
    marksMaxTheory: number;
    marksPractical: number;
    marksTheory: number;
    marksTotal: number;
    name: string;
}
export declare class AcademicCertificateSchemaCertificateDataPerformance extends SpeakeasyBase {
    subjects: AcademicCertificateSchemaCertificateDataPerformanceSubjects[];
    cgpa: string;
    cgpaMax: string;
    grade: string;
    marksMax: string;
    marksTotal: string;
    percentage: string;
    result: string;
    resultDate: string;
    updateDate: string;
}
export declare class AcademicCertificateSchemaCertificateDataSchool extends SpeakeasyBase {
    code: string;
    name: string;
}
export declare class AcademicCertificateSchemaCertificateData extends SpeakeasyBase {
    examination: AcademicCertificateSchemaCertificateDataExamination;
    performance: AcademicCertificateSchemaCertificateDataPerformance;
    school: AcademicCertificateSchemaCertificateDataSchool;
}
export declare class AcademicCertificateSchemaIssuedByOrganizationAddress extends SpeakeasyBase {
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
export declare class AcademicCertificateSchemaIssuedByOrganization extends SpeakeasyBase {
    address: AcademicCertificateSchemaIssuedByOrganizationAddress;
    code: string;
    name: string;
    tin: string;
    type: string;
    uid: string;
}
export declare class AcademicCertificateSchemaIssuedBy extends SpeakeasyBase {
    organization: AcademicCertificateSchemaIssuedByOrganization;
}
export declare class AcademicCertificateSchemaIssuedToPersonAddress extends SpeakeasyBase {
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
export declare class AcademicCertificateSchemaIssuedToPersonPhoto extends SpeakeasyBase {
    format: string;
}
export declare class AcademicCertificateSchemaIssuedToPerson extends SpeakeasyBase {
    address: AcademicCertificateSchemaIssuedToPersonAddress;
    photo: AcademicCertificateSchemaIssuedToPersonPhoto;
    category: string;
    disabilityStatus: string;
    dob: string;
    email: string;
    gender: string;
    maritalStatus: string;
    motherName: string;
    name: string;
    phone: string;
    religion: string;
    swd: string;
    swdIndicator: string;
    title: string;
    uid: string;
}
export declare class AcademicCertificateSchemaIssuedTo extends SpeakeasyBase {
    person: AcademicCertificateSchemaIssuedToPerson;
}
export declare class AcademicCertificateSchema extends SpeakeasyBase {
    certificateData: AcademicCertificateSchemaCertificateData;
    issuedBy: AcademicCertificateSchemaIssuedBy;
    issuedTo: AcademicCertificateSchemaIssuedTo;
    issueDate: string;
    issuedAt: string;
    language: string;
    name: string;
    number: number;
    status: string;
    type: string;
    validFromDate: string;
}
