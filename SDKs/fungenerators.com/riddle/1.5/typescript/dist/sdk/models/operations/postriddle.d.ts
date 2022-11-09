import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostRiddleQueryParams extends SpeakeasyBase {
    answer: string;
    category: string;
    question: string;
}
export declare class PostRiddleSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class PostRiddleRequest extends SpeakeasyBase {
    queryParams: PostRiddleQueryParams;
    security: PostRiddleSecurity;
}
export declare class PostRiddleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
