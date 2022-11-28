import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupsDeletePathParams extends SpeakeasyBase {
    id: number;
}
export declare class GroupsDeleteRequest extends SpeakeasyBase {
    pathParams: GroupsDeletePathParams;
}
export declare class GroupsDeleteResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
