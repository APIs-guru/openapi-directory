import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataPointsDeletePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DataPointsDeleteRequest extends SpeakeasyBase {
    pathParams: DataPointsDeletePathParams;
}
export declare class DataPointsDeleteResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
