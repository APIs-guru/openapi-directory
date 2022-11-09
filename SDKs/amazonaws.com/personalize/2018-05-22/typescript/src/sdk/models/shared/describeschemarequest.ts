import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeSchemaRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=schemaArn" })
  schemaArn: string;
}
