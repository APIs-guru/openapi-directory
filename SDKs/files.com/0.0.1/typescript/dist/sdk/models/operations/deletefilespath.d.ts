import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteFilesPathPathParams extends SpeakeasyBase {
    path: string;
}
export declare class DeleteFilesPathQueryParams extends SpeakeasyBase {
    recursive?: boolean;
}
export declare class DeleteFilesPathRequest extends SpeakeasyBase {
    pathParams: DeleteFilesPathPathParams;
    queryParams: DeleteFilesPathQueryParams;
}
export declare class DeleteFilesPathResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
