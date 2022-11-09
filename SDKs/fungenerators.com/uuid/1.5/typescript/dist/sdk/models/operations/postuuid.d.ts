import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostUuidQueryParams extends SpeakeasyBase {
    uuidstr: string;
}
export declare class PostUuidSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class PostUuidRequest extends SpeakeasyBase {
    queryParams: PostUuidQueryParams;
    security: PostUuidSecurity;
}
export declare class PostUuidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
