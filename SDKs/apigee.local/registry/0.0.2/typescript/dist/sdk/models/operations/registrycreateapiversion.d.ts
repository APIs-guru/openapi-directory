import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class RegistryCreateApiVersionPathParams extends SpeakeasyBase {
    api: string;
    project: string;
}
export declare class RegistryCreateApiVersionQueryParams extends SpeakeasyBase {
    apiVersionId?: string;
}
export declare class RegistryCreateApiVersionRequest extends SpeakeasyBase {
    pathParams: RegistryCreateApiVersionPathParams;
    queryParams: RegistryCreateApiVersionQueryParams;
    request: any;
}
export declare class RegistryCreateApiVersionResponse extends SpeakeasyBase {
    apiVersion?: any;
    contentType: string;
    statusCode: number;
}
