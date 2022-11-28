import { SpeakeasyBase } from "../../../internal/utils";
export declare class PatchContainersGroupsNameOrIdPathParams extends SpeakeasyBase {
    nameOrId: string;
}
export declare class PatchContainersGroupsNameOrIdHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class PatchContainersGroupsNameOrIdRequest extends SpeakeasyBase {
    pathParams: PatchContainersGroupsNameOrIdPathParams;
    headers: PatchContainersGroupsNameOrIdHeaders;
    request: any;
}
export declare class PatchContainersGroupsNameOrIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
