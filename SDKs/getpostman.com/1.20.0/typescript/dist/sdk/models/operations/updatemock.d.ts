import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateMockPathParams extends SpeakeasyBase {
    mockUid: string;
}
export declare class UpdateMockRequestBodyMock extends SpeakeasyBase {
    description?: string;
    environment?: string;
    name?: string;
    private?: boolean;
    versionTag?: string;
}
export declare class UpdateMockRequestBody extends SpeakeasyBase {
    mock?: UpdateMockRequestBodyMock;
}
export declare class UpdateMock200ApplicationJsonMockConfig extends SpeakeasyBase {
    headers?: any[];
    matchBody?: boolean;
    matchQueryParams?: boolean;
    matchWildcards?: boolean;
}
export declare class UpdateMock200ApplicationJsonMock extends SpeakeasyBase {
    collection?: string;
    config?: UpdateMock200ApplicationJsonMockConfig;
    environment?: string;
    id?: string;
    mockUrl?: string;
    name?: string;
    owner?: string;
    uid?: string;
}
export declare class UpdateMock200ApplicationJson extends SpeakeasyBase {
    mock?: UpdateMock200ApplicationJsonMock;
}
export declare class UpdateMockRequest extends SpeakeasyBase {
    pathParams: UpdateMockPathParams;
    request?: UpdateMockRequestBody;
}
export declare class UpdateMockResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateMock200ApplicationJsonObject?: UpdateMock200ApplicationJson;
}
