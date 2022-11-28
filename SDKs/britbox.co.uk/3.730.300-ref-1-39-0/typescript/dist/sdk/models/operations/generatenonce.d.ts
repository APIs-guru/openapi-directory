import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GenerateNonceQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class GenerateNonceSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class GenerateNonceRequest extends SpeakeasyBase {
    queryParams: GenerateNonceQueryParams;
    security: GenerateNonceSecurity;
}
export declare class GenerateNonceResponse extends SpeakeasyBase {
    accountNonce?: shared.AccountNonce;
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
