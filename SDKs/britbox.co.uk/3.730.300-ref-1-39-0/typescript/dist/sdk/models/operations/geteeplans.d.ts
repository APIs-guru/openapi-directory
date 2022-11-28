import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEePlansQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class GetEePlansRequest extends SpeakeasyBase {
    queryParams: GetEePlansQueryParams;
}
export declare class GetEePlansResponse extends SpeakeasyBase {
    contentType: string;
    eePlans?: shared.EePlans;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
