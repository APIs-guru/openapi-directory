import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteMockPathParams extends SpeakeasyBase {
    mockUid: string;
}
export declare class DeleteMock200ApplicationJsonMock extends SpeakeasyBase {
    id?: string;
    uid?: string;
}
export declare class DeleteMock200ApplicationJson extends SpeakeasyBase {
    mock?: DeleteMock200ApplicationJsonMock;
}
export declare class DeleteMockRequest extends SpeakeasyBase {
    pathParams: DeleteMockPathParams;
}
export declare class DeleteMockResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteMock200ApplicationJsonObject?: DeleteMock200ApplicationJson;
}
