import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPlansQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class GetPlansRequest extends SpeakeasyBase {
    queryParams: GetPlansQueryParams;
}
export declare class GetPlansResponse extends SpeakeasyBase {
    btPlans?: shared.BtPlans;
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
