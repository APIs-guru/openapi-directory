import { SpeakeasyBase } from "../../../internal/utils";
import { SettingMetadata } from "./settingmetadata";
export declare enum SenderFormatEnum {
    Csv = "CSV"
}
/**
 * An sender of reports to the data hub
**/
export declare class Sender extends SpeakeasyBase {
    description: string;
    format: SenderFormatEnum;
    meta?: SettingMetadata;
    name: string;
    organizationName?: string;
    schema: string;
    topic: string;
}
/**
 * An sender of reports to the data hub
**/
export declare class SenderInput extends SpeakeasyBase {
    description: string;
    format: SenderFormatEnum;
    name: string;
    schema: string;
    topic: string;
}
