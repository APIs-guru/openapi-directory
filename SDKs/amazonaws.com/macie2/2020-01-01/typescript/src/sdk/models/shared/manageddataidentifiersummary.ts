import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SensitiveDataItemCategoryEnum } from "./sensitivedataitemcategoryenum";


// ManagedDataIdentifierSummary
/** 
 * Provides information about a managed data identifier. For additional information, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.
**/
export class ManagedDataIdentifierSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: SensitiveDataItemCategoryEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;
}
