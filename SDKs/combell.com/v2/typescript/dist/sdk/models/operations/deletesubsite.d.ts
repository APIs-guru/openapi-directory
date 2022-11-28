import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteSubsitePathParams extends SpeakeasyBase {
    domainName: string;
    siteName: string;
}
export declare class DeleteSubsiteQueryParams extends SpeakeasyBase {
    domainName: string;
    siteName: string;
}
export declare class DeleteSubsiteRequest extends SpeakeasyBase {
    pathParams: DeleteSubsitePathParams;
    queryParams: DeleteSubsiteQueryParams;
}
export declare class DeleteSubsiteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
