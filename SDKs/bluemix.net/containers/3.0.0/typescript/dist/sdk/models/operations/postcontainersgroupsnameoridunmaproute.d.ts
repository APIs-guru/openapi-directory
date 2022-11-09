import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostContainersGroupsNameOrIdUnmaproutePathParams extends SpeakeasyBase {
    nameOrId: string;
}
export declare class PostContainersGroupsNameOrIdUnmaprouteHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class PostContainersGroupsNameOrIdUnmaprouteRequest extends SpeakeasyBase {
    pathParams: PostContainersGroupsNameOrIdUnmaproutePathParams;
    headers: PostContainersGroupsNameOrIdUnmaprouteHeaders;
    request: shared.Route;
}
export declare class PostContainersGroupsNameOrIdUnmaprouteResponse extends SpeakeasyBase {
    containersGroupsNameOrIdMaproutePostInfo?: shared.ContainersGroupsNameOrIdMaproutePostInfo;
    contentType: string;
    statusCode: number;
}
