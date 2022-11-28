import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1GraphQlOperation
/** 
 * Represents the pairing of GraphQL operation types and the GraphQL operation name.
**/
export class GoogleCloudApigeeV1GraphQlOperation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: string;

  @SpeakeasyMetadata({ data: "json, name=operationTypes" })
  operationTypes?: string[];
}
