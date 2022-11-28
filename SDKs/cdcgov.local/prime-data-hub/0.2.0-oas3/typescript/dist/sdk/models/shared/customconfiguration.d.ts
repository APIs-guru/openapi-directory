import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CustomConfigurationFormatEnum {
    Csv = "CSV",
    Hl7 = "HL7"
}
/**
 * A custom configuration for a custom schema
**/
export declare class CustomConfiguration extends SpeakeasyBase {
    format: CustomConfigurationFormatEnum;
    nameFormat?: string;
    receivingOrganization?: string;
    schemaName: string;
    transport: any;
    type: string;
}
