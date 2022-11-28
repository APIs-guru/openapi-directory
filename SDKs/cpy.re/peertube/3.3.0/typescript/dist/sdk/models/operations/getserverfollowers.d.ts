import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetServerFollowersQueryParams extends SpeakeasyBase {
    actorType?: shared.ActorTypeEnum;
    count?: number;
    sort?: string;
    start?: number;
    state?: shared.FollowStateEnum;
}
export declare class GetServerFollowers200ApplicationJson extends SpeakeasyBase {
    data?: any[];
    total?: number;
}
export declare class GetServerFollowersRequest extends SpeakeasyBase {
    queryParams: GetServerFollowersQueryParams;
}
export declare class GetServerFollowersResponse extends SpeakeasyBase {
    contentType: string;
    getServerFollowers200ApplicationJsonObject?: GetServerFollowers200ApplicationJson;
    statusCode: number;
}
