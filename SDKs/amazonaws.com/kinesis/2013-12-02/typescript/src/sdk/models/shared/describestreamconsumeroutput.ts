import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConsumerDescription } from "./consumerdescription";


export class DescribeStreamConsumerOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConsumerDescription" })
  consumerDescription: ConsumerDescription;
}
