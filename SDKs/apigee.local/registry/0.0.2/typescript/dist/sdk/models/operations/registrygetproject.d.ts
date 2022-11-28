import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegistryGetProjectPathParams extends SpeakeasyBase {
    project: string;
}
export declare class RegistryGetProjectRequest extends SpeakeasyBase {
    pathParams: RegistryGetProjectPathParams;
}
export declare class RegistryGetProjectResponse extends SpeakeasyBase {
    contentType: string;
    project?: any;
    statusCode: number;
}
