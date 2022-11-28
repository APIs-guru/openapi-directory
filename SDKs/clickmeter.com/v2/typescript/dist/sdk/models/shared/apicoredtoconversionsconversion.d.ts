import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ApiCoreDtoConversionsConversionProtocolEnum {
    Http = "Http",
    Https = "Https"
}
export declare class ApiCoreDtoConversionsConversion extends SpeakeasyBase {
    code?: string;
    creationDate?: string;
    deleted?: boolean;
    description?: string;
    id?: number;
    name?: string;
    protocol?: ApiCoreDtoConversionsConversionProtocolEnum;
    value?: number;
}
