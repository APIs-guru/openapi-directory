import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SensitiveDataItemCategoryEnum } from "./sensitivedataitemcategoryenum";



// ManagedDataIdentifierSummary
/** 
 * Provides information about a managed data identifier. For additional information, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.
**/
export class ManagedDataIdentifierSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: SensitiveDataItemCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
