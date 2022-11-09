import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class OptionsBlockIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class OptionsBlockIdRequest extends SpeakeasyBase {
    pathParams: OptionsBlockIdPathParams;
}
export declare class OptionsBlockIdResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    headers: Map<string, string[]>;
    statusCode: number;
}
