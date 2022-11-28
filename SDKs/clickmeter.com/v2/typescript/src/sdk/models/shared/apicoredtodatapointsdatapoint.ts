import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiCoreDtoTagsTag } from "./apicoredtotagstag";
import { ApiCoreDtoDatapointsTrackingLinkSpecifics } from "./apicoredtodatapointstrackinglinkspecifics";
import { ApiCoreDtoDatapointsTrackingPixelSpecifics } from "./apicoredtodatapointstrackingpixelspecifics";


export enum ApiCoreDtoDatapointsDatapointStatusEnum {
    Active = "Active",
    Paused = "Paused",
    Abuse = "Abuse",
    Deleted = "Deleted"
}

export enum ApiCoreDtoDatapointsDatapointTypeEnum {
    TrackingLink = "TrackingLink",
    TrackingPixel = "TrackingPixel"
}


export class ApiCoreDtoDatapointsDatapoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=encodeIp" })
  encodeIp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fifthConversionId" })
  fifthConversionId?: number;

  @SpeakeasyMetadata({ data: "json, name=fifthConversionName" })
  fifthConversionName?: string;

  @SpeakeasyMetadata({ data: "json, name=firstConversionId" })
  firstConversionId?: number;

  @SpeakeasyMetadata({ data: "json, name=firstConversionName" })
  firstConversionName?: string;

  @SpeakeasyMetadata({ data: "json, name=fourthConversionId" })
  fourthConversionId?: number;

  @SpeakeasyMetadata({ data: "json, name=fourthConversionName" })
  fourthConversionName?: string;

  @SpeakeasyMetadata({ data: "json, name=groupId" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "json, name=groupName" })
  groupName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=isPublic" })
  isPublic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSecured" })
  isSecured?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lightTracking" })
  lightTracking?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=preferred" })
  preferred?: boolean;

  @SpeakeasyMetadata({ data: "json, name=redirectOnly" })
  redirectOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=secondConversionId" })
  secondConversionId?: number;

  @SpeakeasyMetadata({ data: "json, name=secondConversionName" })
  secondConversionName?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ApiCoreDtoDatapointsDatapointStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: ApiCoreDtoTagsTag })
  tags?: ApiCoreDtoTagsTag[];

  @SpeakeasyMetadata({ data: "json, name=thirdConversionId" })
  thirdConversionId?: number;

  @SpeakeasyMetadata({ data: "json, name=thirdConversionName" })
  thirdConversionName?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=trackingCode" })
  trackingCode?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ApiCoreDtoDatapointsDatapointTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=typeTL" })
  typeTl?: ApiCoreDtoDatapointsTrackingLinkSpecifics;

  @SpeakeasyMetadata({ data: "json, name=typeTP" })
  typeTp?: ApiCoreDtoDatapointsTrackingPixelSpecifics;

  @SpeakeasyMetadata({ data: "json, name=writePermited" })
  writePermited?: boolean;
}
