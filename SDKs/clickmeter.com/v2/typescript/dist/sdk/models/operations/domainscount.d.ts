import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DomainsCountTypeEnum {
    System = "system",
    Go = "go",
    Personal = "personal",
    Dedicated = "dedicated"
}
export declare class DomainsCountQueryParams extends SpeakeasyBase {
    name?: string;
    type?: DomainsCountTypeEnum;
}
export declare class DomainsCountRequest extends SpeakeasyBase {
    queryParams: DomainsCountQueryParams;
}
export declare class DomainsCountResponse extends SpeakeasyBase {
    apiCoreResponsesCountResponce?: shared.ApiCoreResponsesCountResponce;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
