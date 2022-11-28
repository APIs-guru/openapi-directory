import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegistryCreateProjectQueryParams extends SpeakeasyBase {
    projectId?: string;
}
export declare class RegistryCreateProjectRequest extends SpeakeasyBase {
    queryParams: RegistryCreateProjectQueryParams;
    request: any;
}
export declare class RegistryCreateProjectResponse extends SpeakeasyBase {
    contentType: string;
    project?: any;
    statusCode: number;
}
