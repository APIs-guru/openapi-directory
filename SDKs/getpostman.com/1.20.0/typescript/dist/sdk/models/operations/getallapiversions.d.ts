import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAllApiVersionsPathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class GetAllApiVersions200ApplicationJsonVersions extends SpeakeasyBase {
    createdAt?: string;
    createdBy?: string;
    description?: string;
    id?: string;
    name?: string;
    summary?: string;
    updatedAt?: string;
}
export declare class GetAllApiVersions200ApplicationJson extends SpeakeasyBase {
    versions?: GetAllApiVersions200ApplicationJsonVersions[];
}
export declare class GetAllApiVersionsRequest extends SpeakeasyBase {
    pathParams: GetAllApiVersionsPathParams;
}
export declare class GetAllApiVersionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAllApiVersions200ApplicationJsonObject?: GetAllApiVersions200ApplicationJson;
}
