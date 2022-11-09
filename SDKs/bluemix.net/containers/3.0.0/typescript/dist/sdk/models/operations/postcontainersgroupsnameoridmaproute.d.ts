import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostContainersGroupsNameOrIdMaproutePathParams extends SpeakeasyBase {
    nameOrId: string;
}
export declare class PostContainersGroupsNameOrIdMaprouteHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class PostContainersGroupsNameOrIdMaprouteRequest extends SpeakeasyBase {
    pathParams: PostContainersGroupsNameOrIdMaproutePathParams;
    headers: PostContainersGroupsNameOrIdMaprouteHeaders;
    request: shared.Route;
}
export declare class PostContainersGroupsNameOrIdMaprouteResponse extends SpeakeasyBase {
    containersGroupsNameOrIdMaproutePostInfo?: shared.ContainersGroupsNameOrIdMaproutePostInfo;
    contentType: string;
    statusCode: number;
}
