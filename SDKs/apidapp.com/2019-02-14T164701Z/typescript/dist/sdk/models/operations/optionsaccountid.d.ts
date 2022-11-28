import { SpeakeasyBase } from "../../../internal/utils";
export declare class OptionsAccountIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class OptionsAccountIdRequest extends SpeakeasyBase {
    pathParams: OptionsAccountIdPathParams;
}
export declare class OptionsAccountIdResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    headers: Map<string, string[]>;
    statusCode: number;
}
