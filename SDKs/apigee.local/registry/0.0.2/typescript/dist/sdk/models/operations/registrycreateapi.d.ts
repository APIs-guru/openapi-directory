import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class RegistryCreateApiPathParams extends SpeakeasyBase {
    project: string;
}
export declare class RegistryCreateApiQueryParams extends SpeakeasyBase {
    apiId?: string;
}
export declare class RegistryCreateApiRequest extends SpeakeasyBase {
    pathParams: RegistryCreateApiPathParams;
    queryParams: RegistryCreateApiQueryParams;
    request: any;
}
export declare class RegistryCreateApiResponse extends SpeakeasyBase {
    api?: any;
    contentType: string;
    statusCode: number;
}
