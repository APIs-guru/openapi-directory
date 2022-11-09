import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssociationEdgeTypeEnum } from "./associationedgetypeenum";
import { UserContext } from "./usercontext";


// AssociationSummary
/** 
 * Lists a summary of the properties of an association. An association is an entity that links other lineage or experiment entities. An example would be an association between a training job and a model.
**/
export class AssociationSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationType" })
  associationType?: AssociationEdgeTypeEnum;

  @Metadata({ data: "json, name=CreatedBy" })
  createdBy?: UserContext;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DestinationArn" })
  destinationArn?: string;

  @Metadata({ data: "json, name=DestinationName" })
  destinationName?: string;

  @Metadata({ data: "json, name=DestinationType" })
  destinationType?: string;

  @Metadata({ data: "json, name=SourceArn" })
  sourceArn?: string;

  @Metadata({ data: "json, name=SourceName" })
  sourceName?: string;

  @Metadata({ data: "json, name=SourceType" })
  sourceType?: string;
}
