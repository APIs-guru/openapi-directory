import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AttributeValue
/** 
 * The values of a given attribute, such as <code>Throughput Optimized HDD</code> or <code>Provisioned IOPS</code> for the <code>Amazon EC2</code> <code>volumeType</code> attribute.
**/
export class AttributeValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
