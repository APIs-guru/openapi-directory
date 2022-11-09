import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutRiddleQueryParams extends SpeakeasyBase {
    answer: string;
    category: string;
    question: string;
}
export declare class PutRiddleSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class PutRiddleRequest extends SpeakeasyBase {
    queryParams: PutRiddleQueryParams;
    security: PutRiddleSecurity;
}
export declare class PutRiddleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
