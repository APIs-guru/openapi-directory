import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegistryUpdateApiVersionPathParams extends SpeakeasyBase {
    api: string;
    project: string;
    version: string;
}
export declare class RegistryUpdateApiVersionQueryParams extends SpeakeasyBase {
    updateMask?: string;
}
export declare class RegistryUpdateApiVersionRequest extends SpeakeasyBase {
    pathParams: RegistryUpdateApiVersionPathParams;
    queryParams: RegistryUpdateApiVersionQueryParams;
    request: any;
}
export declare class RegistryUpdateApiVersionResponse extends SpeakeasyBase {
    apiVersion?: any;
    contentType: string;
    statusCode: number;
}
