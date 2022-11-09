import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class RegistryRollbackApiSpecPathParams extends SpeakeasyBase {
    api: string;
    project: string;
    spec: string;
    version: string;
}
export declare class RegistryRollbackApiSpecRequest extends SpeakeasyBase {
    pathParams: RegistryRollbackApiSpecPathParams;
    request: any;
}
export declare class RegistryRollbackApiSpecResponse extends SpeakeasyBase {
    apiSpec?: any;
    contentType: string;
    statusCode: number;
}
