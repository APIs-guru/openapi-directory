import { SpeakeasyBase } from "../../../internal/utils";
export declare class AllMocks200ApplicationJsonMocks extends SpeakeasyBase {
    collection?: string;
    environment?: string;
    id?: string;
    mockUrl?: string;
    owner?: string;
    uid?: string;
}
export declare class AllMocks200ApplicationJson extends SpeakeasyBase {
    mocks?: AllMocks200ApplicationJsonMocks[];
}
export declare class AllMocksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    allMocks200ApplicationJsonObject?: AllMocks200ApplicationJson;
}
