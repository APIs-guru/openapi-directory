import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteLocksPathPathParams extends SpeakeasyBase {
    path: string;
}
export declare class DeleteLocksPathQueryParams extends SpeakeasyBase {
    token: string;
}
export declare class DeleteLocksPathRequest extends SpeakeasyBase {
    pathParams: DeleteLocksPathPathParams;
    queryParams: DeleteLocksPathQueryParams;
}
export declare class DeleteLocksPathResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
