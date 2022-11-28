import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegistryGetApiSpecContentsPathParams extends SpeakeasyBase {
    api: string;
    project: string;
    spec: string;
    version: string;
}
export declare class RegistryGetApiSpecContentsRequest extends SpeakeasyBase {
    pathParams: RegistryGetApiSpecContentsPathParams;
}
export declare class RegistryGetApiSpecContentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
