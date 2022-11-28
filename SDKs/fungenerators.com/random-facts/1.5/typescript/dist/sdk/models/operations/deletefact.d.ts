import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteFactQueryParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteFactSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class DeleteFactRequest extends SpeakeasyBase {
    queryParams: DeleteFactQueryParams;
    security: DeleteFactSecurity;
}
export declare class DeleteFactResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
