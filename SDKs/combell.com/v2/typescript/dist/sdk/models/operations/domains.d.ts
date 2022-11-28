import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DomainsQueryParams extends SpeakeasyBase {
    skip?: number;
    take?: number;
}
export declare class DomainsRequest extends SpeakeasyBase {
    queryParams: DomainsQueryParams;
}
export declare class DomainsResponse extends SpeakeasyBase {
    contentType: string;
    domains?: shared.Domain[];
    headers: Map<string, string[]>;
    statusCode: number;
}
