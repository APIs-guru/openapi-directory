import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AssignMsisdnQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class AssignMsisdnSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class AssignMsisdnRequest extends SpeakeasyBase {
    queryParams: AssignMsisdnQueryParams;
    request: shared.ItvAssignMsisdnRequest;
    security: AssignMsisdnSecurity;
}
export declare class AssignMsisdnResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
