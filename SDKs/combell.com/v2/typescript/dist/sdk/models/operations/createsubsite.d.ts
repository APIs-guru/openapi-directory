import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateSubsitePathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class CreateSubsiteQueryParams extends SpeakeasyBase {
    domainName: string;
}
export declare class CreateSubsiteRequest extends SpeakeasyBase {
    pathParams: CreateSubsitePathParams;
    queryParams: CreateSubsiteQueryParams;
    request?: shared.AddSubsiteRequest;
}
export declare class CreateSubsiteResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
