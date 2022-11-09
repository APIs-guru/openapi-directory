import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1GraphQlOperation
/** 
 * Represents the pairing of GraphQL operation types and the GraphQL operation name.
**/
export class GoogleCloudApigeeV1GraphQlOperation extends SpeakeasyBase {
  @Metadata({ data: "json, name=operation" })
  operation?: string;

  @Metadata({ data: "json, name=operationTypes" })
  operationTypes?: string[];
}
