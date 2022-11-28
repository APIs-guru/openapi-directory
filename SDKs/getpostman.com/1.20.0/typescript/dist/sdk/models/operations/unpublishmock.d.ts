import { SpeakeasyBase } from "../../../internal/utils";
export declare class UnpublishMockPathParams extends SpeakeasyBase {
    mockUid: string;
}
export declare class UnpublishMock200ApplicationJsonMock extends SpeakeasyBase {
    id?: string;
}
export declare class UnpublishMock200ApplicationJson extends SpeakeasyBase {
    mock?: UnpublishMock200ApplicationJsonMock;
}
export declare class UnpublishMockRequest extends SpeakeasyBase {
    pathParams: UnpublishMockPathParams;
}
export declare class UnpublishMockResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    unpublishMock200ApplicationJsonObject?: UnpublishMock200ApplicationJson;
}
