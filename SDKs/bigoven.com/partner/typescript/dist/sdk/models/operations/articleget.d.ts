import { SpeakeasyBase } from "../../../internal/utils";
export declare class ArticleGetPathParams extends SpeakeasyBase {
    uniqueKeyword: string;
}
export declare class ArticleGetRequest extends SpeakeasyBase {
    pathParams: ArticleGetPathParams;
}
export declare class ArticleGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
