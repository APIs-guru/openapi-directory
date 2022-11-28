import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MigrationsSetLfsPreferencePathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare enum MigrationsSetLfsPreferenceRequestBodyUseLfsEnum {
    OptIn = "opt_in",
    OptOut = "opt_out"
}
export declare class MigrationsSetLfsPreferenceRequestBody extends SpeakeasyBase {
    useLfs: MigrationsSetLfsPreferenceRequestBodyUseLfsEnum;
}
export declare class MigrationsSetLfsPreferenceRequest extends SpeakeasyBase {
    pathParams: MigrationsSetLfsPreferencePathParams;
    request?: MigrationsSetLfsPreferenceRequestBody;
}
export declare class MigrationsSetLfsPreferenceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    import?: shared.Import;
    validationError?: shared.ValidationError;
}
