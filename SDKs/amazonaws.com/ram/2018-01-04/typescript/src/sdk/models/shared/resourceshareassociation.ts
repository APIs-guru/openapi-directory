import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceShareAssociationTypeEnum } from "./resourceshareassociationtypeenum";
import { ResourceShareAssociationStatusEnum } from "./resourceshareassociationstatusenum";



// ResourceShareAssociation
/** 
 * Describes an association with a resource share.
**/
export class ResourceShareAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=associatedEntity" })
  associatedEntity?: string;

  @SpeakeasyMetadata({ data: "json, name=associationType" })
  associationType?: ResourceShareAssociationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=external" })
  external?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedTime" })
  lastUpdatedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=resourceShareArn" })
  resourceShareArn?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceShareName" })
  resourceShareName?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ResourceShareAssociationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;
}
