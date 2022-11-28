import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchAs2KeysIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PatchAs2KeysIdRequestBody extends SpeakeasyBase {
    as2PartnershipName: string;
}
export declare class PatchAs2KeysIdRequest extends SpeakeasyBase {
    pathParams: PatchAs2KeysIdPathParams;
    request: PatchAs2KeysIdRequestBody;
}
export declare class PatchAs2KeysIdResponse extends SpeakeasyBase {
    as2KeyEntity?: shared.As2KeyEntity;
    contentType: string;
    statusCode: number;
}
