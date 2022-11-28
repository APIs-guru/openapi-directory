import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChangeMarketingQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class ChangeMarketingSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class ChangeMarketingRequest extends SpeakeasyBase {
    queryParams: ChangeMarketingQueryParams;
    request: shared.ItvChangeMarketingRequest;
    security: ChangeMarketingSecurity;
}
export declare class ChangeMarketingResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
