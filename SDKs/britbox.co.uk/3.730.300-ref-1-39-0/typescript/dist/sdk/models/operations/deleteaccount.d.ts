import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAccountQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class DeleteAccountSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class DeleteAccountRequest extends SpeakeasyBase {
    queryParams: DeleteAccountQueryParams;
    request: shared.ItvDeleteAccountRequest;
    security: DeleteAccountSecurity;
}
export declare class DeleteAccountResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
