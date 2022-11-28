import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAs2KeysIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetAs2KeysIdRequest extends SpeakeasyBase {
    pathParams: GetAs2KeysIdPathParams;
}
export declare class GetAs2KeysIdResponse extends SpeakeasyBase {
    as2KeyEntity?: shared.As2KeyEntity;
    contentType: string;
    statusCode: number;
}
