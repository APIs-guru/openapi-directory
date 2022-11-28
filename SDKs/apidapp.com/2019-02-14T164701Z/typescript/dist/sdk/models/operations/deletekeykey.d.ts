import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteKeyKeyPathParams extends SpeakeasyBase {
    key: string;
}
export declare class DeleteKeyKeyRequest extends SpeakeasyBase {
    pathParams: DeleteKeyKeyPathParams;
}
export declare class DeleteKeyKeyResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
