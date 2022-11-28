import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceShareFeatureSetEnum } from "./resourcesharefeaturesetenum";
import { ResourceShareStatusEnum } from "./resourcesharestatusenum";
import { Tag } from "./tag";



// ResourceShare
/** 
 * Describes a resource share.
**/
export class ResourceShare extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowExternalPrincipals" })
  allowExternalPrincipals?: boolean;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=featureSet" })
  featureSet?: ResourceShareFeatureSetEnum;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedTime" })
  lastUpdatedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=owningAccountId" })
  owningAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceShareArn" })
  resourceShareArn?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ResourceShareStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
