import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateHostHeaderPathParams extends SpeakeasyBase {
    domainName: string;
    siteName: string;
}
export declare class CreateHostHeaderQueryParams extends SpeakeasyBase {
    domainName: string;
    siteName: string;
}
export declare class CreateHostHeaderRequest extends SpeakeasyBase {
    pathParams: CreateHostHeaderPathParams;
    queryParams: CreateHostHeaderQueryParams;
    request?: shared.AddHostHeaderRequest;
}
export declare class CreateHostHeaderResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
