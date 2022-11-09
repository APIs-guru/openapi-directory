import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class NewsSearchReadPathParams extends SpeakeasyBase {
    title: string;
}
export declare class NewsSearchReadRequest extends SpeakeasyBase {
    pathParams: NewsSearchReadPathParams;
}
export declare class NewsSearchReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
