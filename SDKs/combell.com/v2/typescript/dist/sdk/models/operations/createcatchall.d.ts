import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateCatchAllPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class CreateCatchAllQueryParams extends SpeakeasyBase {
    domainName: string;
}
export declare class CreateCatchAllRequest extends SpeakeasyBase {
    pathParams: CreateCatchAllPathParams;
    queryParams: CreateCatchAllQueryParams;
    request?: shared.CreateCatchAllRequest;
}
export declare class CreateCatchAllResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
