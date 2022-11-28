import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegistryUpdateApiPathParams extends SpeakeasyBase {
    api: string;
    project: string;
}
export declare class RegistryUpdateApiQueryParams extends SpeakeasyBase {
    updateMask?: string;
}
export declare class RegistryUpdateApiRequest extends SpeakeasyBase {
    pathParams: RegistryUpdateApiPathParams;
    queryParams: RegistryUpdateApiQueryParams;
    request: any;
}
export declare class RegistryUpdateApiResponse extends SpeakeasyBase {
    api?: any;
    contentType: string;
    statusCode: number;
}
