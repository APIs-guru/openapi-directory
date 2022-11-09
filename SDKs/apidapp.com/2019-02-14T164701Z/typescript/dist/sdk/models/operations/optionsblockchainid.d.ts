import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class OptionsBlockchainIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class OptionsBlockchainIdRequest extends SpeakeasyBase {
    pathParams: OptionsBlockchainIdPathParams;
}
export declare class OptionsBlockchainIdResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    headers: Map<string, string[]>;
    statusCode: number;
}
