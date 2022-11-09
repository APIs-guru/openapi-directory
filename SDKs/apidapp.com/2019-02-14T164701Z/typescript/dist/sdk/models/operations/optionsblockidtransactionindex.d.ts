import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class OptionsBlockIdTransactionIndexPathParams extends SpeakeasyBase {
    id: string;
    index: string;
}
export declare class OptionsBlockIdTransactionIndexRequest extends SpeakeasyBase {
    pathParams: OptionsBlockIdTransactionIndexPathParams;
}
export declare class OptionsBlockIdTransactionIndexResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    headers: Map<string, string[]>;
    statusCode: number;
}
