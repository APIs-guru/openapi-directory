import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChangeLetsEncryptPathParams extends SpeakeasyBase {
    domainName: string;
    hostname: string;
}
export declare class ChangeLetsEncryptQueryParams extends SpeakeasyBase {
    domainName: string;
}
export declare class ChangeLetsEncryptRequest extends SpeakeasyBase {
    pathParams: ChangeLetsEncryptPathParams;
    queryParams: ChangeLetsEncryptQueryParams;
    request?: shared.LetsEncryptConfig;
}
export declare class ChangeLetsEncryptResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
