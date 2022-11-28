import { SpeakeasyBase } from "../../../internal/utils";
import { SensitiveDataItemCategoryEnum } from "./sensitivedataitemcategoryenum";
/**
 * Provides information about a managed data identifier. For additional information, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.
**/
export declare class ManagedDataIdentifierSummary extends SpeakeasyBase {
    category?: SensitiveDataItemCategoryEnum;
    id?: string;
}
