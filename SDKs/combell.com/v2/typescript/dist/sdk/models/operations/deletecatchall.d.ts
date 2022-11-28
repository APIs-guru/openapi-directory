import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteCatchAllPathParams extends SpeakeasyBase {
    domainName: string;
    emailAddress: string;
}
export declare class DeleteCatchAllQueryParams extends SpeakeasyBase {
    domainName: string;
    emailAddress: string;
}
export declare class DeleteCatchAllRequest extends SpeakeasyBase {
    pathParams: DeleteCatchAllPathParams;
    queryParams: DeleteCatchAllQueryParams;
}
export declare class DeleteCatchAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
