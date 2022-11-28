import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupsPatchFavouritePathParams extends SpeakeasyBase {
    id: number;
}
export declare class GroupsPatchFavouriteRequest extends SpeakeasyBase {
    pathParams: GroupsPatchFavouritePathParams;
}
export declare class GroupsPatchFavouriteResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
