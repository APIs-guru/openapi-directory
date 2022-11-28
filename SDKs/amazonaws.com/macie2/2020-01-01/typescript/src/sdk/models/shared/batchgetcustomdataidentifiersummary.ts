import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchGetCustomDataIdentifierSummary
/** 
 * Provides information about a custom data identifier.
**/
export class BatchGetCustomDataIdentifierSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
