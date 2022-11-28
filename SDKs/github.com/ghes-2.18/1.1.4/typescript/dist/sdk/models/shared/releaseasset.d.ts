import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ReleaseAssetStateEnum {
    Uploaded = "uploaded",
    Open = "open"
}
export declare class ReleaseAssetSimpleUser extends SpeakeasyBase {
    avatarUrl: string;
    eventsUrl: string;
    followersUrl: string;
    followingUrl: string;
    gistsUrl: string;
    gravatarId: string;
    htmlUrl: string;
    id: number;
    login: string;
    nodeId: string;
    organizationsUrl: string;
    receivedEventsUrl: string;
    reposUrl: string;
    siteAdmin: boolean;
    starredAt?: string;
    starredUrl: string;
    subscriptionsUrl: string;
    type: string;
    url: string;
}
/**
 * Data related to a release.
**/
export declare class ReleaseAsset extends SpeakeasyBase {
    browserDownloadUrl: string;
    contentType: string;
    createdAt: Date;
    downloadCount: number;
    id: number;
    label: string;
    name: string;
    nodeId: string;
    size: number;
    state: ReleaseAssetStateEnum;
    updatedAt: Date;
    uploader: ReleaseAssetSimpleUser;
    url: string;
}
