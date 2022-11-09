import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiCoreDtoTagsTag } from "./apicoredtotagstag";

export enum ApiCoreDtoClickStreamHitDatapointInfoStatusEnum {
    Active = "Active"
,    Paused = "Paused"
,    Abuse = "Abuse"
,    Deleted = "Deleted"
}


export class ApiCoreDtoClickStreamHitDatapointInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @Metadata({ data: "json, name=datapointFavourite" })
  datapointFavourite?: boolean;

  @Metadata({ data: "json, name=datapointId" })
  datapointId?: number;

  @Metadata({ data: "json, name=datapointName" })
  datapointName?: string;

  @Metadata({ data: "json, name=datapointTitle" })
  datapointTitle?: string;

  @Metadata({ data: "json, name=datapointType" })
  datapointType?: string;

  @Metadata({ data: "json, name=destinationUrl" })
  destinationUrl?: string;

  @Metadata({ data: "json, name=groupId" })
  groupId?: number;

  @Metadata({ data: "json, name=groupName" })
  groupName?: string;

  @Metadata({ data: "json, name=isABTest" })
  isAbTest?: boolean;

  @Metadata({ data: "json, name=isPrivateShared" })
  isPrivateShared?: boolean;

  @Metadata({ data: "json, name=isPublic" })
  isPublic?: boolean;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=status" })
  status?: ApiCoreDtoClickStreamHitDatapointInfoStatusEnum;

  @Metadata({ data: "json, name=tags", elemType: shared.ApiCoreDtoTagsTag })
  tags?: ApiCoreDtoTagsTag[];

  @Metadata({ data: "json, name=trackingCode" })
  trackingCode?: string;
}
