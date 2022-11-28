import { SpeakeasyBase } from "../../../internal/utils";
import { ApiCoreDtoTagsTag } from "./apicoredtotagstag";
export declare enum ApiCoreDtoClickStreamHitDatapointInfoStatusEnum {
    Active = "Active",
    Paused = "Paused",
    Abuse = "Abuse",
    Deleted = "Deleted"
}
export declare class ApiCoreDtoClickStreamHitDatapointInfo extends SpeakeasyBase {
    creationDate?: string;
    datapointFavourite?: boolean;
    datapointId?: number;
    datapointName?: string;
    datapointTitle?: string;
    datapointType?: string;
    destinationUrl?: string;
    groupId?: number;
    groupName?: string;
    isAbTest?: boolean;
    isPrivateShared?: boolean;
    isPublic?: boolean;
    notes?: string;
    status?: ApiCoreDtoClickStreamHitDatapointInfoStatusEnum;
    tags?: ApiCoreDtoTagsTag[];
    trackingCode?: string;
}
