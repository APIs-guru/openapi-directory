import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssociationEdgeTypeEnum } from "./associationedgetypeenum";
import { UserContext } from "./usercontext";



// AssociationSummary
/** 
 * Lists a summary of the properties of an association. An association is an entity that links other lineage or experiment entities. An example would be an association between a training job and a model.
**/
export class AssociationSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociationType" })
  associationType?: AssociationEdgeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=CreatedBy" })
  createdBy?: UserContext;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DestinationArn" })
  destinationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DestinationName" })
  destinationName?: string;

  @SpeakeasyMetadata({ data: "json, name=DestinationType" })
  destinationType?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceArn" })
  sourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceName" })
  sourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceType" })
  sourceType?: string;
}
