import { SpeakeasyBase } from "../../../internal/utils";
export declare class SingleMockPathParams extends SpeakeasyBase {
    mockUid: string;
}
export declare class SingleMock200ApplicationJsonMock extends SpeakeasyBase {
    collection?: string;
    environment?: string;
    id?: string;
    mockUrl?: string;
    owner?: string;
    uid?: string;
}
export declare class SingleMock200ApplicationJson extends SpeakeasyBase {
    mock?: SingleMock200ApplicationJsonMock;
}
export declare class SingleMockRequest extends SpeakeasyBase {
    pathParams: SingleMockPathParams;
}
export declare class SingleMockResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    singleMock200ApplicationJsonObject?: SingleMock200ApplicationJson;
}
