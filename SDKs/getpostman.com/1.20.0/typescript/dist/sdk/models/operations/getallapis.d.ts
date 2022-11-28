import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAllApIsQueryParams extends SpeakeasyBase {
    createdBy?: string;
    description?: string;
    direction?: string;
    isPublic?: string;
    name?: string;
    since?: string;
    sort?: string;
    summary?: string;
    until?: string;
    updatedBy?: string;
    workspace?: string;
}
export declare class GetAllApIsRequest extends SpeakeasyBase {
    queryParams: GetAllApIsQueryParams;
}
export declare class GetAllApIsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
