import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPlansIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPlansIdQueryParams extends SpeakeasyBase {
    device?: string;
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
    segments?: string[];
    sub?: string;
}
export declare class GetPlansIdRequest extends SpeakeasyBase {
    pathParams: GetPlansIdPathParams;
    queryParams: GetPlansIdQueryParams;
}
export declare class GetPlansIdResponse extends SpeakeasyBase {
    contentType: string;
    plan?: shared.Plan;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
