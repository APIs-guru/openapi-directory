import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class RegistryGetApiPathParams extends SpeakeasyBase {
    api: string;
    project: string;
}
export declare class RegistryGetApiRequest extends SpeakeasyBase {
    pathParams: RegistryGetApiPathParams;
}
export declare class RegistryGetApiResponse extends SpeakeasyBase {
    api?: any;
    contentType: string;
    statusCode: number;
}
