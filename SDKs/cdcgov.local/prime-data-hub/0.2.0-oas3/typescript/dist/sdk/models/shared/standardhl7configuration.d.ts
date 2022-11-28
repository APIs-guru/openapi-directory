import { SpeakeasyBase } from "../../../internal/utils";
export declare enum StandardHl7ConfigurationPhoneNumberFormattingEnum {
    Standard = "STANDARD",
    OnlyDigitsInComponentOne = "ONLY_DIGITS_IN_COMPONENT_ONE",
    AreaLocalInComponentOne = "AREA_LOCAL_IN_COMPONENT_ONE"
}
/**
 * A standard HL7 configuration
**/
export declare class StandardHl7Configuration extends SpeakeasyBase {
    convertTimestampToDateTime?: string;
    defaultAoeToUnknown?: boolean;
    includeAoe: boolean;
    nameFormat?: string;
    phoneNumberFormatting?: StandardHl7ConfigurationPhoneNumberFormattingEnum;
    receivingApplicationName?: string;
    receivingApplicationOid?: string;
    receivingFacilityName?: string;
    receivingFacilityOid?: string;
    receivingOrganization?: string;
    reportingFacilityId?: string;
    reportingFacilityIdType?: string;
    reportingFacilityName?: string;
    suppressAoe?: boolean;
    suppressHl7Fields?: string;
    suppressQstForAoe?: boolean;
    transport: any;
    truncateHdNamespaceIds?: boolean;
    type: string;
    useBatchHeaders: boolean;
    useBlankInsteadOfUnknown?: string;
    usePid14ForPatientEmail?: boolean;
    useTestProcessingMode?: boolean;
}
