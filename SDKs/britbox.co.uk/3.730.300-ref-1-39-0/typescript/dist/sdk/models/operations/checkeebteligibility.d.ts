import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CheckEeBtEligibilityQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class CheckEeBtEligibilitySecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class CheckEeBtEligibilityRequest extends SpeakeasyBase {
    queryParams: CheckEeBtEligibilityQueryParams;
    security: CheckEeBtEligibilitySecurity;
}
export declare class CheckEeBtEligibilityResponse extends SpeakeasyBase {
    contentType: string;
    eeBtEligibility?: shared.EeBtEligibility;
    statusCode: number;
}
