import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SeverityLabelEnum } from "./severitylabelenum";



// Severity
/** 
 * <p>The severity of the finding.</p> <p>The finding provider can provide the initial severity. The finding provider can only update the severity if it has not been updated using <code>BatchUpdateFindings</code>.</p> <p>The finding must have either <code>Label</code> or <code>Normalized</code> populated. If only one of these attributes is populated, then Security Hub automatically populates the other one. If neither attribute is populated, then the finding is invalid. <code>Label</code> is the preferred attribute.</p>
**/
export class Severity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Label" })
  label?: SeverityLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=Normalized" })
  normalized?: number;

  @SpeakeasyMetadata({ data: "json, name=Original" })
  original?: string;

  @SpeakeasyMetadata({ data: "json, name=Product" })
  product?: number;
}
