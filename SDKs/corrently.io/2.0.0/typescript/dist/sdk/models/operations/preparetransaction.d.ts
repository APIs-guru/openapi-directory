import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PrepareTransactionRequestBodyVariationEnum {
    Gsb = "gsb",
    Erzeugung = "erzeugung",
    Eigenstrom = "eigenstrom",
    Co2 = "co2",
    Baeume = "baeume"
}
export declare class PrepareTransactionRequestBody extends SpeakeasyBase {
    account?: string;
    signature?: string;
    to?: string;
    value?: number;
    variation?: PrepareTransactionRequestBodyVariationEnum;
}
export declare class PrepareTransactionRequest extends SpeakeasyBase {
    request: PrepareTransactionRequestBody;
}
export declare class PrepareTransactionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
