import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LicensesGetPathParams extends SpeakeasyBase {
    license: string;
}
export declare class LicensesGetRequest extends SpeakeasyBase {
    pathParams: LicensesGetPathParams;
}
export declare class LicensesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    license?: shared.License;
}
