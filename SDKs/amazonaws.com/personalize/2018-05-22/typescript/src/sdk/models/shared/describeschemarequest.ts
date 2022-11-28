import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeSchemaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=schemaArn" })
  schemaArn: string;
}
