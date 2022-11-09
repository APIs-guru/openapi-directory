import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class RegistryUpdateProjectPathParams extends SpeakeasyBase {
    project: string;
}
export declare class RegistryUpdateProjectQueryParams extends SpeakeasyBase {
    updateMask?: string;
}
export declare class RegistryUpdateProjectRequest extends SpeakeasyBase {
    pathParams: RegistryUpdateProjectPathParams;
    queryParams: RegistryUpdateProjectQueryParams;
    request: any;
}
export declare class RegistryUpdateProjectResponse extends SpeakeasyBase {
    contentType: string;
    project?: any;
    statusCode: number;
}
