import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchGetCustomDataIdentifierSummary
/** 
 * Provides information about a custom data identifier.
**/
export class BatchGetCustomDataIdentifierSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
