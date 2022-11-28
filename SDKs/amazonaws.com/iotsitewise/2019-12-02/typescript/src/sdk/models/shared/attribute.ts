import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Attribute
/** 
 * Contains an asset attribute property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#attributes">Attributes</a> in the <i>IoT SiteWise User Guide</i>.
**/
export class Attribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultValue" })
  defaultValue?: string;
}
