import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetargetingGetQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class RetargetingGetRequest extends SpeakeasyBase {
    queryParams: RetargetingGetQueryParams;
}
export declare class RetargetingGetResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64;
    contentType: string;
    statusCode: number;
}
