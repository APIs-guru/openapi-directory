import { SpeakeasyBase } from "../../../internal/utils";
import { ApiCoreDtoTagsTag } from "./apicoredtotagstag";
import { ApiCoreDtoDatapointsTrackingLinkSpecifics } from "./apicoredtodatapointstrackinglinkspecifics";
import { ApiCoreDtoDatapointsTrackingPixelSpecifics } from "./apicoredtodatapointstrackingpixelspecifics";
export declare enum ApiCoreDtoDatapointsDatapointStatusEnum {
    Active = "Active",
    Paused = "Paused",
    Abuse = "Abuse",
    Deleted = "Deleted"
}
export declare enum ApiCoreDtoDatapointsDatapointTypeEnum {
    TrackingLink = "TrackingLink",
    TrackingPixel = "TrackingPixel"
}
export declare class ApiCoreDtoDatapointsDatapoint extends SpeakeasyBase {
    creationDate?: string;
    encodeIp?: boolean;
    fifthConversionId?: number;
    fifthConversionName?: string;
    firstConversionId?: number;
    firstConversionName?: string;
    fourthConversionId?: number;
    fourthConversionName?: string;
    groupId?: number;
    groupName?: string;
    id?: number;
    isPublic?: boolean;
    isSecured?: boolean;
    lightTracking?: boolean;
    name?: string;
    notes?: string;
    preferred?: boolean;
    redirectOnly?: boolean;
    secondConversionId?: number;
    secondConversionName?: string;
    status?: ApiCoreDtoDatapointsDatapointStatusEnum;
    tags?: ApiCoreDtoTagsTag[];
    thirdConversionId?: number;
    thirdConversionName?: string;
    title?: string;
    trackingCode?: string;
    type?: ApiCoreDtoDatapointsDatapointTypeEnum;
    typeTl?: ApiCoreDtoDatapointsTrackingLinkSpecifics;
    typeTp?: ApiCoreDtoDatapointsTrackingPixelSpecifics;
    writePermited?: boolean;
}
