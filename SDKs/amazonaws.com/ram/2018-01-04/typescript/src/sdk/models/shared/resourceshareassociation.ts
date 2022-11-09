import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceShareAssociationTypeEnum } from "./resourceshareassociationtypeenum";
import { ResourceShareAssociationStatusEnum } from "./resourceshareassociationstatusenum";


// ResourceShareAssociation
/** 
 * Describes an association with a resource share.
**/
export class ResourceShareAssociation extends SpeakeasyBase {
  @Metadata({ data: "json, name=associatedEntity" })
  associatedEntity?: string;

  @Metadata({ data: "json, name=associationType" })
  associationType?: ResourceShareAssociationTypeEnum;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=external" })
  external?: boolean;

  @Metadata({ data: "json, name=lastUpdatedTime" })
  lastUpdatedTime?: Date;

  @Metadata({ data: "json, name=resourceShareArn" })
  resourceShareArn?: string;

  @Metadata({ data: "json, name=resourceShareName" })
  resourceShareName?: string;

  @Metadata({ data: "json, name=status" })
  status?: ResourceShareAssociationStatusEnum;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;
}
