import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeWorldResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=generationJob" })
  generationJob?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=template" })
  template?: string;

  @Metadata({ data: "json, name=worldDescriptionBody" })
  worldDescriptionBody?: string;
}
