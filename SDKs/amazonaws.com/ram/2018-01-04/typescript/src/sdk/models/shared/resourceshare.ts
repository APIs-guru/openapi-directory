import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceShareFeatureSetEnum } from "./resourcesharefeaturesetenum";
import { ResourceShareStatusEnum } from "./resourcesharestatusenum";
import { Tag } from "./tag";


// ResourceShare
/** 
 * Describes a resource share.
**/
export class ResourceShare extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowExternalPrincipals" })
  allowExternalPrincipals?: boolean;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=featureSet" })
  featureSet?: ResourceShareFeatureSetEnum;

  @Metadata({ data: "json, name=lastUpdatedTime" })
  lastUpdatedTime?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=owningAccountId" })
  owningAccountId?: string;

  @Metadata({ data: "json, name=resourceShareArn" })
  resourceShareArn?: string;

  @Metadata({ data: "json, name=status" })
  status?: ResourceShareStatusEnum;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
