import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsumerDescription } from "./consumerdescription";



export class DescribeStreamConsumerOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsumerDescription" })
  consumerDescription: ConsumerDescription;
}
