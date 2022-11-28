import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SignOutQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class SignOutRequest extends SpeakeasyBase {
    queryParams: SignOutQueryParams;
}
export declare class SignOutResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
