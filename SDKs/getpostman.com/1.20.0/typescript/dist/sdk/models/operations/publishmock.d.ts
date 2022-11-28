import { SpeakeasyBase } from "../../../internal/utils";
export declare class PublishMockPathParams extends SpeakeasyBase {
    mockUid: string;
}
export declare class PublishMock200ApplicationJsonMock extends SpeakeasyBase {
    id?: string;
}
export declare class PublishMock200ApplicationJson extends SpeakeasyBase {
    mock?: PublishMock200ApplicationJsonMock;
}
export declare class PublishMockRequest extends SpeakeasyBase {
    pathParams: PublishMockPathParams;
}
export declare class PublishMockResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    publishMock200ApplicationJsonObject?: PublishMock200ApplicationJson;
}
