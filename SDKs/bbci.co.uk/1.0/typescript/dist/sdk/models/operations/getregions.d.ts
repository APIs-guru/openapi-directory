import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRegionsQueryParams extends SpeakeasyBase {
    lang: shared.LangEnum;
}
export declare class GetRegionsRequest extends SpeakeasyBase {
    queryParams: GetRegionsQueryParams;
}
export declare class GetRegionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ibl?: any;
}
