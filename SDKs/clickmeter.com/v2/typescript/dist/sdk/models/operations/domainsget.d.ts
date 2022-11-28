import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DomainsGetTypeEnum {
    System = "system",
    Go = "go",
    Personal = "personal",
    Dedicated = "dedicated"
}
export declare class DomainsGetQueryParams extends SpeakeasyBase {
    limit?: number;
    name?: string;
    offset?: number;
    type?: DomainsGetTypeEnum;
}
export declare class DomainsGetRequest extends SpeakeasyBase {
    queryParams: DomainsGetQueryParams;
}
export declare class DomainsGetResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64;
    contentType: string;
    statusCode: number;
}
