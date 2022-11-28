import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetClickwrapsQueryParams extends SpeakeasyBase {
    cursor?: string;
    perPage?: number;
}
export declare class GetClickwrapsRequest extends SpeakeasyBase {
    queryParams: GetClickwrapsQueryParams;
}
export declare class GetClickwrapsResponse extends SpeakeasyBase {
    clickwrapEntities?: shared.ClickwrapEntity[];
    contentType: string;
    statusCode: number;
}
