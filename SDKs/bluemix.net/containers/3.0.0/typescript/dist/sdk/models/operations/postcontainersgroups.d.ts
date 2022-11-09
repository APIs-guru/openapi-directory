import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostContainersGroupsHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class PostContainersGroupsRequest extends SpeakeasyBase {
    headers: PostContainersGroupsHeaders;
    request: any;
}
export declare class PostContainersGroupsResponse extends SpeakeasyBase {
    containersGroupsPostCreatedInfo?: shared.ContainersGroupsPostCreatedInfo;
    contentType: string;
    statusCode: number;
}
