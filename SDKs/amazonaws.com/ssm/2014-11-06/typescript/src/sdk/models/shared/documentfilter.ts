import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DocumentFilterKeyEnum } from "./documentfilterkeyenum";


// DocumentFilter
/** 
 * This data type is deprecated. Instead, use <a>DocumentKeyValuesFilter</a>.
**/
export class DocumentFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: DocumentFilterKeyEnum;

  @Metadata({ data: "json, name=value" })
  value: string;
}
