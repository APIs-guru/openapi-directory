import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiCoreDtoTagsTag } from "./apicoredtotagstag";
import { ApiCoreDtoDatapointsTrackingLinkSpecifics } from "./apicoredtodatapointstrackinglinkspecifics";
import { ApiCoreDtoDatapointsTrackingPixelSpecifics } from "./apicoredtodatapointstrackingpixelspecifics";

export enum ApiCoreDtoDatapointsDatapointStatusEnum {
    Active = "Active"
,    Paused = "Paused"
,    Abuse = "Abuse"
,    Deleted = "Deleted"
}

export enum ApiCoreDtoDatapointsDatapointTypeEnum {
    TrackingLink = "TrackingLink"
,    TrackingPixel = "TrackingPixel"
}


export class ApiCoreDtoDatapointsDatapoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @Metadata({ data: "json, name=encodeIp" })
  encodeIp?: boolean;

  @Metadata({ data: "json, name=fifthConversionId" })
  fifthConversionId?: number;

  @Metadata({ data: "json, name=fifthConversionName" })
  fifthConversionName?: string;

  @Metadata({ data: "json, name=firstConversionId" })
  firstConversionId?: number;

  @Metadata({ data: "json, name=firstConversionName" })
  firstConversionName?: string;

  @Metadata({ data: "json, name=fourthConversionId" })
  fourthConversionId?: number;

  @Metadata({ data: "json, name=fourthConversionName" })
  fourthConversionName?: string;

  @Metadata({ data: "json, name=groupId" })
  groupId?: number;

  @Metadata({ data: "json, name=groupName" })
  groupName?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=isPublic" })
  isPublic?: boolean;

  @Metadata({ data: "json, name=isSecured" })
  isSecured?: boolean;

  @Metadata({ data: "json, name=lightTracking" })
  lightTracking?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=preferred" })
  preferred?: boolean;

  @Metadata({ data: "json, name=redirectOnly" })
  redirectOnly?: boolean;

  @Metadata({ data: "json, name=secondConversionId" })
  secondConversionId?: number;

  @Metadata({ data: "json, name=secondConversionName" })
  secondConversionName?: string;

  @Metadata({ data: "json, name=status" })
  status?: ApiCoreDtoDatapointsDatapointStatusEnum;

  @Metadata({ data: "json, name=tags", elemType: shared.ApiCoreDtoTagsTag })
  tags?: ApiCoreDtoTagsTag[];

  @Metadata({ data: "json, name=thirdConversionId" })
  thirdConversionId?: number;

  @Metadata({ data: "json, name=thirdConversionName" })
  thirdConversionName?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=trackingCode" })
  trackingCode?: string;

  @Metadata({ data: "json, name=type" })
  type?: ApiCoreDtoDatapointsDatapointTypeEnum;

  @Metadata({ data: "json, name=typeTL" })
  typeTl?: ApiCoreDtoDatapointsTrackingLinkSpecifics;

  @Metadata({ data: "json, name=typeTP" })
  typeTp?: ApiCoreDtoDatapointsTrackingPixelSpecifics;

  @Metadata({ data: "json, name=writePermited" })
  writePermited?: boolean;
}
