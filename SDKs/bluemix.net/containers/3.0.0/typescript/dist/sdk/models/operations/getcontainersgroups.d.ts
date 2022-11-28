import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetContainersGroupsHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class GetContainersGroupsRequest extends SpeakeasyBase {
    headers: GetContainersGroupsHeaders;
}
export declare class GetContainersGroupsResponse extends SpeakeasyBase {
    containersGroupsGetListItems?: any[];
    contentType: string;
    statusCode: number;
}
