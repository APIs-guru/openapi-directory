import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SeverityLevel
/** 
 * A code and name pair that represents the severity level of a support case. The available values depend on the support plan for the account. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/case-management.html#choosing-severity">Choosing a severity</a> in the <i>AWS Support User Guide</i>.
**/
export class SeverityLevel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
