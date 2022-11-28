import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItvRokuPlansQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class GetItvRokuPlansRequest extends SpeakeasyBase {
    queryParams: GetItvRokuPlansQueryParams;
}
export declare class GetItvRokuPlansResponse extends SpeakeasyBase {
    contentType: string;
    rokuPlans?: shared.RokuPlans;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
