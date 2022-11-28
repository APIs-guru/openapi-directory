import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChangeApcuPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class ChangeApcuQueryParams extends SpeakeasyBase {
    domainName: string;
}
export declare class ChangeApcuRequest extends SpeakeasyBase {
    pathParams: ChangeApcuPathParams;
    queryParams: ChangeApcuQueryParams;
    request?: shared.UpdatePhpAPcuRequest;
}
export declare class ChangeApcuResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
