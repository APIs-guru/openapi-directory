import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentFilterKeyEnum } from "./documentfilterkeyenum";



// DocumentFilter
/** 
 * This data type is deprecated. Instead, use <a>DocumentKeyValuesFilter</a>.
**/
export class DocumentFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: DocumentFilterKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
