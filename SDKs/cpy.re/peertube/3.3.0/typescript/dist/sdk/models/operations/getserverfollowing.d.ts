import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetServerFollowingQueryParams extends SpeakeasyBase {
    actorType?: shared.ActorTypeEnum;
    count?: number;
    sort?: string;
    start?: number;
    state?: shared.FollowStateEnum;
}
export declare class GetServerFollowing200ApplicationJson extends SpeakeasyBase {
    data?: any[];
    total?: number;
}
export declare class GetServerFollowingRequest extends SpeakeasyBase {
    queryParams: GetServerFollowingQueryParams;
}
export declare class GetServerFollowingResponse extends SpeakeasyBase {
    contentType: string;
    getServerFollowing200ApplicationJsonObject?: GetServerFollowing200ApplicationJson;
    statusCode: number;
}
