import { SpeakeasyBase } from "../../../internal/utils";
export declare class CheckDomainPathParams extends SpeakeasyBase {
    domain: string;
}
export declare class CheckDomain200ApplicationJson extends SpeakeasyBase {
    isAvailable?: boolean;
}
export declare class CheckDomainRequest extends SpeakeasyBase {
    pathParams: CheckDomainPathParams;
}
export declare class CheckDomainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    checkDomain200ApplicationJsonObject?: CheckDomain200ApplicationJson;
}
