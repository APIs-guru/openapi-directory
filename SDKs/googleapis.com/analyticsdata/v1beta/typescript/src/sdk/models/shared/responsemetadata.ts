import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SchemaRestrictionResponse } from "./schemarestrictionresponse";


// ResponseMetaData
/** 
 * Response's metadata carrying additional information about the report content.
**/
export class ResponseMetaData extends SpeakeasyBase {
  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=dataLossFromOtherRow" })
  dataLossFromOtherRow?: boolean;

  @Metadata({ data: "json, name=emptyReason" })
  emptyReason?: string;

  @Metadata({ data: "json, name=schemaRestrictionResponse" })
  schemaRestrictionResponse?: SchemaRestrictionResponse;

  @Metadata({ data: "json, name=subjectToThresholding" })
  subjectToThresholding?: boolean;

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;
}
