import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateMockRequestBodyMock extends SpeakeasyBase {
    collection?: string;
    environment?: string;
}
export declare class CreateMockRequestBody extends SpeakeasyBase {
    mock?: CreateMockRequestBodyMock;
}
export declare class CreateMock200ApplicationJsonMock extends SpeakeasyBase {
    collection?: string;
    environment?: string;
    id?: string;
    mockUrl?: string;
    owner?: string;
    uid?: string;
}
export declare class CreateMock200ApplicationJson extends SpeakeasyBase {
    mock?: CreateMock200ApplicationJsonMock;
}
export declare class CreateMockRequest extends SpeakeasyBase {
    request?: CreateMockRequestBody;
}
export declare class CreateMockResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createMock200ApplicationJsonObject?: CreateMock200ApplicationJson;
}
