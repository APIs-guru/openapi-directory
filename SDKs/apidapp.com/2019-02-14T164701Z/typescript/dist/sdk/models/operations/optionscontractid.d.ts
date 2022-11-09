import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class OptionsContractIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class OptionsContractIdRequest extends SpeakeasyBase {
    pathParams: OptionsContractIdPathParams;
}
export declare class OptionsContractIdResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    headers: Map<string, string[]>;
    statusCode: number;
}
