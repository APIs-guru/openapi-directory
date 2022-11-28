import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiCoreDtoTagsTag } from "./apicoredtotagstag";


export enum ApiCoreDtoClickStreamHitDatapointInfoStatusEnum {
    Active = "Active",
    Paused = "Paused",
    Abuse = "Abuse",
    Deleted = "Deleted"
}


export class ApiCoreDtoClickStreamHitDatapointInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=datapointFavourite" })
  datapointFavourite?: boolean;

  @SpeakeasyMetadata({ data: "json, name=datapointId" })
  datapointId?: number;

  @SpeakeasyMetadata({ data: "json, name=datapointName" })
  datapointName?: string;

  @SpeakeasyMetadata({ data: "json, name=datapointTitle" })
  datapointTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=datapointType" })
  datapointType?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationUrl" })
  destinationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=groupId" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "json, name=groupName" })
  groupName?: string;

  @SpeakeasyMetadata({ data: "json, name=isABTest" })
  isAbTest?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isPrivateShared" })
  isPrivateShared?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isPublic" })
  isPublic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ApiCoreDtoClickStreamHitDatapointInfoStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: ApiCoreDtoTagsTag })
  tags?: ApiCoreDtoTagsTag[];

  @SpeakeasyMetadata({ data: "json, name=trackingCode" })
  trackingCode?: string;
}
