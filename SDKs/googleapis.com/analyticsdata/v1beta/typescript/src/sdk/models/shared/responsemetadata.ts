import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaRestrictionResponse } from "./schemarestrictionresponse";



// ResponseMetaData
/** 
 * Response's metadata carrying additional information about the report content.
**/
export class ResponseMetaData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=dataLossFromOtherRow" })
  dataLossFromOtherRow?: boolean;

  @SpeakeasyMetadata({ data: "json, name=emptyReason" })
  emptyReason?: string;

  @SpeakeasyMetadata({ data: "json, name=schemaRestrictionResponse" })
  schemaRestrictionResponse?: SchemaRestrictionResponse;

  @SpeakeasyMetadata({ data: "json, name=subjectToThresholding" })
  subjectToThresholding?: boolean;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;
}
